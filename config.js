// ============================================================
//  파이어베이스 설정
//  (웹 apiKey는 공개되는 값입니다. 접근 통제는 DB 규칙이 합니다.)
// ============================================================
const firebaseConfig = {
  apiKey: "AIzaSyCXNifqucATsALvPys9ufwkst3u8BElUZM",
  authDomain: "mock-exchange-f9c16.firebaseapp.com",
  databaseURL: "https://mock-exchange-f9c16-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mock-exchange-f9c16",
  storageBucket: "mock-exchange-f9c16.firebasestorage.app",
  messagingSenderId: "799771883969",
  appId: "1:799771883969:web:d07270bed3da59d4a31740"
};

// 교사 전용 원본 데이터가 저장되는 방 이름(학생 화면은 쓰지 않습니다). 여러 반을 돌릴 때만 바꾸세요.
const ROOM = "class1";
