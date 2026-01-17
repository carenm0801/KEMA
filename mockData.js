// Mock 데이터 - 실제 백엔드 연동 전까지 사용

// 기관 데이터
const mockOrganizations = [
    {
        id: 1,
        name: "서울 행복 요양센터",
        business_number: "123-45-67890",
        director_name: "김센터장",
        phone: "02-1234-5678",
        email: "happy@example.com",
        address: "서울시 강남구 테헤란로 123",
        status: "active",
        created_at: "2023-01-15T09:00:00"
    },
    {
        id: 2,
        name: "부산 사랑 방문요양",
        business_number: "234-56-78901",
        director_name: "이센터장",
        phone: "051-2345-6789",
        email: "love@example.com",
        address: "부산시 해운대구 해운대로 456",
        status: "active",
        created_at: "2023-02-20T10:30:00"
    },
    {
        id: 3,
        name: "대구 희망 케어센터",
        business_number: "345-67-89012",
        director_name: "박센터장",
        phone: "053-3456-7890",
        email: "hope@example.com",
        address: "대구시 수성구 동대구로 789",
        status: "active",
        created_at: "2023-03-10T11:00:00"
    },
    {
        id: 4,
        name: "인천 평화 요양원",
        business_number: "456-78-90123",
        director_name: "최센터장",
        phone: "032-4567-8901",
        email: "peace@example.com",
        address: "인천시 남동구 인주대로 321",
        status: "active",
        created_at: "2023-04-05T14:20:00"
    },
    {
        id: 5,
        name: "광주 나눔 방문요양",
        business_number: "567-89-01234",
        director_name: "정센터장",
        phone: "062-5678-9012",
        email: "share@example.com",
        address: "광주시 서구 상무대로 654",
        status: "active",
        created_at: "2023-05-12T15:45:00"
    }
];

// 요양보호사 데이터
const mockCaregivers = [
    // 서울 행복 요양센터 (organization_id: 1)
    {
        id: 1,
        organization_id: 1,
        name: "김영희",
        phone: "010-1234-5678",
        birth_date: "1985-03-15",
        certificate_number: "CG-2020-12345",
        hire_date: "2020-01-10",
        status: "active"
    },
    {
        id: 2,
        organization_id: 1,
        name: "이철수",
        phone: "010-2345-6789",
        birth_date: "1982-07-22",
        certificate_number: "CG-2020-12346",
        hire_date: "2020-02-15",
        status: "active"
    },
    {
        id: 3,
        organization_id: 1,
        name: "박민수",
        phone: "010-3456-7890",
        birth_date: "1990-11-08",
        certificate_number: "CG-2021-12347",
        hire_date: "2021-03-20",
        status: "inactive"
    },
    {
        id: 4,
        organization_id: 1,
        name: "정수진",
        phone: "010-4567-8901",
        birth_date: "1988-05-30",
        certificate_number: "CG-2021-12348",
        hire_date: "2021-06-01",
        status: "active"
    },
    {
        id: 5,
        organization_id: 1,
        name: "최지현",
        phone: "010-5678-9012",
        birth_date: "1992-09-14",
        certificate_number: "CG-2022-12349",
        hire_date: "2022-01-15",
        status: "active"
    },

    // 부산 사랑 방문요양 (organization_id: 2)
    {
        id: 6,
        organization_id: 2,
        name: "강미영",
        phone: "010-6789-0123",
        birth_date: "1986-02-18",
        certificate_number: "CG-2020-22345",
        hire_date: "2020-03-10",
        status: "active"
    },
    {
        id: 7,
        organization_id: 2,
        name: "윤서준",
        phone: "010-7890-1234",
        birth_date: "1984-08-25",
        certificate_number: "CG-2020-22346",
        hire_date: "2020-04-20",
        status: "active"
    },
    {
        id: 8,
        organization_id: 2,
        name: "임하늘",
        phone: "010-8901-2345",
        birth_date: "1991-12-03",
        certificate_number: "CG-2021-22347",
        hire_date: "2021-05-15",
        status: "resigned"
    },

    // 대구 희망 케어센터 (organization_id: 3)
    {
        id: 9,
        organization_id: 3,
        name: "한지우",
        phone: "010-9012-3456",
        birth_date: "1987-04-12",
        certificate_number: "CG-2020-32345",
        hire_date: "2020-05-01",
        status: "active"
    },
    {
        id: 10,
        organization_id: 3,
        name: "오세영",
        phone: "010-0123-4567",
        birth_date: "1989-10-28",
        certificate_number: "CG-2021-32346",
        hire_date: "2021-07-10",
        status: "active"
    },
    {
        id: 11,
        organization_id: 3,
        name: "신예린",
        phone: "010-1234-5670",
        birth_date: "1993-06-19",
        certificate_number: "CG-2022-32347",
        hire_date: "2022-02-20",
        status: "active"
    },
    {
        id: 12,
        organization_id: 3,
        name: "배준호",
        phone: "010-2345-6701",
        birth_date: "1985-01-07",
        certificate_number: "CG-2022-32348",
        hire_date: "2022-03-15",
        status: "active"
    },

    // 인천 평화 요양원 (organization_id: 4)
    {
        id: 13,
        organization_id: 4,
        name: "송민지",
        phone: "010-3456-7012",
        birth_date: "1990-07-23",
        certificate_number: "CG-2021-42345",
        hire_date: "2021-08-01",
        status: "active"
    },
    {
        id: 14,
        organization_id: 4,
        name: "류태양",
        phone: "010-4567-0123",
        birth_date: "1988-11-16",
        certificate_number: "CG-2021-42346",
        hire_date: "2021-09-10",
        status: "active"
    },
    {
        id: 15,
        organization_id: 4,
        name: "홍수아",
        phone: "010-5670-1234",
        birth_date: "1992-03-29",
        certificate_number: "CG-2022-42347",
        hire_date: "2022-04-05",
        status: "inactive"
    },

    // 광주 나눔 방문요양 (organization_id: 5)
    {
        id: 16,
        organization_id: 5,
        name: "권도현",
        phone: "010-6701-2345",
        birth_date: "1986-09-11",
        certificate_number: "CG-2021-52345",
        hire_date: "2021-10-15",
        status: "active"
    },
    {
        id: 17,
        organization_id: 5,
        name: "서은비",
        phone: "010-7012-3456",
        birth_date: "1991-05-04",
        certificate_number: "CG-2022-52346",
        hire_date: "2022-05-20",
        status: "active"
    },
    {
        id: 18,
        organization_id: 5,
        name: "남궁현",
        phone: "010-0124-5678",
        birth_date: "1989-12-27",
        certificate_number: "CG-2022-52347",
        hire_date: "2022-06-10",
        status: "active"
    }
];

// 교육 콘텐츠 데이터
const mockEducationContents = [
    {
        id: 1,
        title: "감염 관리 기본 교육",
        description: "요양보호사를 위한 기본 감염 관리 교육",
        content_type: "video",
        content_url: "https://example.com/education/infection-control",
        duration_minutes: 60,
        category: "감염관리",
        is_mandatory: true,
        status: "active"
    },
    {
        id: 2,
        title: "낙상 예방 안전 교육",
        description: "어르신 낙상 예방을 위한 안전 수칙",
        content_type: "video",
        content_url: "https://example.com/education/fall-prevention",
        duration_minutes: 45,
        category: "안전교육",
        is_mandatory: true,
        status: "active"
    },
    {
        id: 3,
        title: "치매 케어 실무",
        description: "치매 어르신 돌봄 실무 교육",
        content_type: "document",
        content_url: "https://example.com/education/dementia-care",
        duration_minutes: 90,
        category: "전문교육",
        is_mandatory: false,
        status: "active"
    }
];

// 이수 결과 데이터
const mockCompletionRecords = [
    // 김영희 (id: 1)
    { id: 1, caregiver_id: 1, education_content_id: 1, status: "completed", completed_at: "2024-01-15T10:30:00", score: 95 },
    { id: 2, caregiver_id: 1, education_content_id: 2, status: "completed", completed_at: "2024-01-20T14:20:00", score: 88 },
    { id: 3, caregiver_id: 1, education_content_id: 3, status: "in_progress", started_at: "2024-01-25T09:00:00" },

    // 이철수 (id: 2)
    { id: 4, caregiver_id: 2, education_content_id: 1, status: "completed", completed_at: "2024-01-16T11:00:00", score: 92 },
    { id: 5, caregiver_id: 2, education_content_id: 2, status: "completed", completed_at: "2024-01-22T15:30:00", score: 90 },

    // 박민수 (id: 3)
    { id: 6, caregiver_id: 3, education_content_id: 1, status: "completed", completed_at: "2024-01-18T13:45:00", score: 85 },

    // 정수진 (id: 4)
    { id: 7, caregiver_id: 4, education_content_id: 1, status: "completed", completed_at: "2024-01-17T10:15:00", score: 98 },
    { id: 8, caregiver_id: 4, education_content_id: 2, status: "completed", completed_at: "2024-01-23T16:00:00", score: 94 },
    { id: 9, caregiver_id: 4, education_content_id: 3, status: "completed", completed_at: "2024-01-28T11:30:00", score: 91 },

    // 최지현 (id: 5)
    { id: 10, caregiver_id: 5, education_content_id: 1, status: "completed", completed_at: "2024-01-19T14:00:00", score: 87 },
    { id: 11, caregiver_id: 5, education_content_id: 2, status: "not_started" },

    // 강미영 (id: 6)
    { id: 12, caregiver_id: 6, education_content_id: 1, status: "completed", completed_at: "2024-01-20T09:30:00", score: 93 },
    { id: 13, caregiver_id: 6, education_content_id: 2, status: "completed", completed_at: "2024-01-25T13:15:00", score: 89 },

    // 윤서준 (id: 7)
    { id: 14, caregiver_id: 7, education_content_id: 1, status: "completed", completed_at: "2024-01-21T10:45:00", score: 96 },

    // 한지우 (id: 9)
    { id: 15, caregiver_id: 9, education_content_id: 1, status: "completed", completed_at: "2024-01-22T11:20:00", score: 91 },
    { id: 16, caregiver_id: 9, education_content_id: 2, status: "completed", completed_at: "2024-01-27T15:45:00", score: 87 },

    // 오세영 (id: 10)
    { id: 17, caregiver_id: 10, education_content_id: 1, status: "completed", completed_at: "2024-01-23T09:00:00", score: 94 },
    { id: 18, caregiver_id: 10, education_content_id: 2, status: "in_progress", started_at: "2024-01-28T10:00:00" },

    // 신예린 (id: 11)
    { id: 19, caregiver_id: 11, education_content_id: 1, status: "completed", completed_at: "2024-01-24T13:30:00", score: 90 },

    // 배준호 (id: 12)
    { id: 20, caregiver_id: 12, education_content_id: 1, status: "completed", completed_at: "2024-01-25T14:15:00", score: 88 },
    { id: 21, caregiver_id: 12, education_content_id: 2, status: "completed", completed_at: "2024-01-29T16:30:00", score: 92 },

    // 송민지 (id: 13)
    { id: 22, caregiver_id: 13, education_content_id: 1, status: "completed", completed_at: "2024-01-26T10:00:00", score: 95 },

    // 류태양 (id: 14)
    { id: 23, caregiver_id: 14, education_content_id: 1, status: "completed", completed_at: "2024-01-27T11:45:00", score: 89 },
    { id: 24, caregiver_id: 14, education_content_id: 2, status: "completed", completed_at: "2024-01-30T14:00:00", score: 91 },

    // 권도현 (id: 16)
    { id: 25, caregiver_id: 16, education_content_id: 1, status: "completed", completed_at: "2024-01-28T09:30:00", score: 93 },

    // 서은비 (id: 17)
    { id: 26, caregiver_id: 17, education_content_id: 1, status: "completed", completed_at: "2024-01-29T13:00:00", score: 86 },
    { id: 27, caregiver_id: 17, education_content_id: 2, status: "not_started" },

    // 남궁현 (id: 18)
    { id: 28, caregiver_id: 18, education_content_id: 1, status: "completed", completed_at: "2024-01-30T15:20:00", score: 97 }
];

// 알림톡 발송 설정 데이터
const mockNotificationSettings = [
    {
        id: 1,
        organization_id: 1,
        education_content_id: 1,
        send_time: "09:00:00",
        send_days: "월,수,금",
        message_template: `안녕하세요, {기관명}입니다.

{보호사명}님, {교육명} 교육을 수강해주세요.

교육 일정: {발송일시}

교육을 완료하시면 이수증이 발급됩니다.

감사합니다.`,
        is_active: true
    },
    {
        id: 2,
        organization_id: 2,
        education_content_id: 1,
        send_time: "10:30:00",
        send_days: "화,목",
        message_template: `[{기관명}] 교육 안내

{보호사명}님께,
{교육명} 교육이 예정되어 있습니다.

일시: {발송일시}

필수 교육이오니 반드시 수강해주시기 바랍니다.`,
        is_active: true
    },
    {
        id: 3,
        organization_id: 3,
        education_content_id: 1,
        send_time: "14:00:00",
        send_days: "월,목",
        message_template: `{보호사명}님, 안녕하세요.

{기관명}에서 {교육명} 교육을 안내드립니다.

📅 {발송일시}

교육 이수 후 수료증이 발급됩니다.`,
        is_active: true
    },
    {
        id: 4,
        organization_id: 4,
        education_content_id: 1,
        send_time: "11:00:00",
        send_days: "수,금",
        message_template: `[교육 알림] {기관명}

{보호사명}님,
{교육명} 교육 안내입니다.

발송일시: {발송일시}

감사합니다.`,
        is_active: true
    },
    {
        id: 5,
        organization_id: 5,
        education_content_id: 1,
        send_time: "15:30:00",
        send_days: "화,금",
        message_template: `{기관명} 교육센터입니다.

{보호사명}님, {교육명} 교육을 수강해주세요.

⏰ {발송일시}

문의사항은 언제든지 연락주세요.`,
        is_active: true
    }
];

// 퀴즈 데이터
const mockQuizzes = [
    {
        education_content_id: 1, // 감염 관리 기본 교육
        questions: [
            {
                id: 1,
                question: "감염 예방을 위한 손 씻기의 가장 올바른 시기는?",
                options: ["식사 전", "화장실 사용 후", "환자 접촉 전후", "위의 모든 경우"],
                answer: 3
            },
            {
                id: 2,
                question: "올바른 마스크 착용 방법이 아닌 것은?",
                options: ["코와 입을 완전히 덮는다", "마스크 겉면을 만지지 않는다", "턱에 걸쳐서 착용한다", "일회용은 재사용하지 않는다"],
                answer: 2
            },
            {
                id: 3,
                question: "감염 예방 수칙 중 가장 기본이 되는 것은?",
                options: ["올바른 손 씻기", "영양제 섭취", "매일 운동하기", "환기 안 하기"],
                answer: 0
            }
        ]
    }
];

// 사용자 계정 데이터
const mockUsers = [
    { username: 'admin', password: '1234', role: 'admin', name: '본사 관리자' },
    { username: 'director', password: '1234', role: 'director', name: '김센터장', organization_id: 1 }
];
