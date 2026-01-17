/**
 * KEMA Backend Scheduler Simulation
 * 
 * 이 스크립트는 실제 백엔드 서버에서 실행될 스케줄러 로직을 시뮬레이션합니다.
 * 매 분(테스트를 위해 짧게 설정 가능)마다 실행되며 다음을 수행합니다:
 * 1. NotificationSettings 테이블(Mock)을 확인
 * 2. 현재 요일과 시간이 설정값과 일치하는지 검사
 * 3. 일치하는 기관의 Caregivers(요양보호사) 목록 추출
 * 4. 발송 시뮬레이션 로그 출력
 */

// ==========================================
// 1. Mock Data Source (실제로는 DB에서 조회)
// ==========================================

const mockOrganizations = [
    { id: 1, name: "서울 행복 요양센터", director: "김철수" },
    { id: 2, name: "부산 사랑 방문요양", director: "박영희" },
    { id: 3, name: "대구 희망 케어", director: "이민수" },
    { id: 4, name: "인천 나눔 센터", director: "최지은" },
    { id: 5, name: "광주 미소 요양", director: "정상훈" }
];

const mockCaregivers = [
    { id: 1, organization_id: 1, name: "김영희", phone: "010-1111-2222", status: "재직" },
    { id: 2, organization_id: 1, name: "이철수", phone: "010-3333-4444", status: "재직" },
    { id: 3, organization_id: 1, name: "박지성", phone: "010-5555-6666", status: "휴직" }, // 휴직자는 제외해야 할 수도 있음
    { id: 4, organization_id: 2, name: "손흥민", phone: "010-7777-8888", status: "재직" },
    { id: 5, organization_id: 3, name: "류현진", phone: "010-9999-0000", status: "재직" }
];

const mockNotificationSettings = [
    {
        id: 1,
        organization_id: 1,
        send_time: "09:00:00",
        send_days: "월,수,금", // 현재 요일이 여기에 포함되어야 함
        is_active: true
    },
    {
        id: 2,
        organization_id: 2,
        send_time: "14:30:00",
        send_days: "화,목",
        is_active: true
    },
    // 테스트를 위해 모든 요일에 동작하는 설정 추가
    {
        id: 99,
        organization_id: 5,
        send_time: getCurrentTimeHHMM() + ":00", // 테스트용: 현재 시간으로 설정
        send_days: "월,화,수,목,금,토,일", // 모든 요일
        is_active: true
    }
];

// ==========================================
// 2. Helper Functions
// ==========================================

// 현재 요일을 한글로 반환 (예: '월')
function getCurrentDayKorean() {
    const days = ['일', '월', '화', '수', '목', '금', '토'];
    const today = new Date();
    return days[today.getDay()];
}

// 현재 시간을 'HH:mm' 형식으로 반환
function getCurrentTimeHHMM() {
    const today = new Date();
    const hours = String(today.getHours()).padStart(2, '0');
    const minutes = String(today.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
}

// 'HH:mm:ss' 형식에서 'HH:mm'만 추출
function formatTimeHHMM(timeString) {
    if (!timeString) return '';
    const parts = timeString.split(':');
    return `${parts[0]}:${parts[1]}`;
}

// ==========================================
// 3. Main Scheduler Logic
// ==========================================

function checkScheduleAndSend() {
    const currentDay = getCurrentDayKorean();
    const currentTime = getCurrentTimeHHMM();

    console.log(`\n[Cron] 스케줄러 실행 중... 현재 시각: ${new Date().toLocaleString()} (${currentDay}요일 ${currentTime})`);

    // 1. 활성화된 모든 알림 설정 확인
    const activeSettings = mockNotificationSettings.filter(settings => settings.is_active);

    console.log(`- 전체 설정 수: ${mockNotificationSettings.length}, 활성화된 설정 수: ${activeSettings.length}`);

    let matchedCount = 0;

    activeSettings.forEach(settings => {
        // 2. 요일 체크
        const targetDays = settings.send_days.split(',');
        if (!targetDays.includes(currentDay)) {
            // 오늘 발송하는 요일이 아님
            return;
        }

        // 3. 시간 체크 (분 단위까지 일치 여부 확인)
        const settingsTime = formatTimeHHMM(settings.send_time);
        if (settingsTime !== currentTime) {
            // 발송 시간이 아님
            return;
        }

        // === 매칭 성공! 발송 로직 실행 ===
        matchedCount++;
        const org = mockOrganizations.find(o => o.id === settings.organization_id);

        if (org) {
            console.log(`\n✅ [MATCH] 발송 조건 일치! 기관명: ${org.name} (ID: ${org.id})`);

            // 4. 소속 요양보호사 명단 가져오기
            const caregivers = mockCaregivers.filter(
                c => c.organization_id === org.id && c.status === '재직' // 재직자만 발송
            );

            console.log(`   - 대상 요양보호사 수: ${caregivers.length}명`);

            if (caregivers.length > 0) {
                console.log(`   - 명단:`);
                caregivers.forEach(c => {
                    console.log(`     * ${c.name} (${c.phone})`);
                });

                // TODO: 실제 알림톡 발송 API 호출 로직이 여기에 들어감
                console.log(`   🚀 알림톡 발송 요청 전송 완료!`);
            } else {
                console.log(`   ⚠️ 주의: 발송 대상 요양보호사가 없습니다.`);
            }
        }
    });

    if (matchedCount === 0) {
        console.log(`- 현재 매칭되는 알림 설정이 없습니다.`);
    }
}

// ==========================================
// 4. Execution
// ==========================================

console.log("KEMA 백엔드 스케줄러가 시작되었습니다.");
console.log("매 분(여기서는 테스트를 위해 10초)마다 스케줄을 확인합니다.");

// 초기 실행
checkScheduleAndSend();

// 10초마다 실행 (실제는 60000ms = 1분 권장)
setInterval(checkScheduleAndSend, 10 * 1000);
