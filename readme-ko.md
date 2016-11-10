# 파이어베이스 커스텀 토큰 예제 ([See text in english](readme.md))

이 예제는 파이어베이스 커스텀 토큰을 생성하고, 그 토큰이 파이어베이스 데이터베이스 규칙에 따라 제대로 동작하는지 테스트 합니다.

----

## 설치

아래 명령어를 실행하세요.

```
git clone https://github.com/dorajistyle/firebase-custom-token-sample.git
cd firebase-custom-token-sample
npm install
```

### 예제용 데이터베이스에 접근하기 위해 이미 생성된 토큰 사용

아래 명령어를 실행하세요.

```
node test-custom-token.js eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGFpbXMiOnsicm9sZSI6InNoYW1hbiJ9LCJ1aWQiOiI5OGY5NGJjMi03MTE4LTQ3YTYtOThmMC1mYzY1MTQ5NzEzZTAiLCJpYXQiOjE0Nzg3NTMwNTYsImV4cCI6MTQ3ODc1NjY1NiwiYXVkIjoiaHR0cHM6Ly9pZGVudGl0eXRvb2xraXQuZ29vZ2xlYXBpcy5jb20vZ29vZ2xlLmlkZW50aXR5LmlkZW50aXR5dG9vbGtpdC52MS5JZGVudGl0eVRvb2xraXQiLCJpc3MiOiJmaXJlYmFzZS1hZG1pbnNkay05emZwdUBjdXN0b20tdG9rZW4tcnVsZS5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInN1YiI6ImZpcmViYXNlLWFkbWluc2RrLTl6ZnB1QGN1c3RvbS10b2tlbi1ydWxlLmlhbS5nc2VydmljZWFjY291bnQuY29tIn0.f0rysM4iCpbgHHAJ2-iPXs1hIbAE479Xjq4jQeBe0QINGvVo0Va6JEVobCHRPZdFPvVQCTA2pXTrIepQszBx7qGQM3VaZwf3We97MeZkCKryUV7OfcT4uzv27rnJJY2NTDm08N5qAJBkt_bEOExLNuboLp_coo8NxTPmsReM4pGjYJIfeeT_LFfC8gdzqU9ZAAe40PqR4urUwC5lEVEzRxi4z4U0M3Rp1TKGPvitMXR9NnsDSIotp9a5_W1r7s9N233aHTt9RKL5fsJkbb53Edvr9q2UKquo1oL9Dsyqqd_-k6h5j934sZLsm-Jw55WQ0DbXLZSLwns1WnFvDZGdeg /official_paper/private/ko
```

결과 : 

```
Firebase custom token test is running!
retrieved data : "무당만 읽을 수 있는 데이터 입니다."'
```

만약  '/official_paper/private/es'에 접근을 시도한다면 권한이 없다는 아래의 메시지가 출력됩니다.

```
errorCode: PERMISSION_DENIED message : permission_denied at /official_paper/private/es: Client doesn't have permission to access the desired data.
```

### Using your own firebase

1. 우선 파이어베이스 프로젝트를 만들고 프로젝트 설정 > 서비스 계정으로 가서 새 비공개 키 생성을 합니다. 이 문서를 참고하세요. [파이어베이스 관리자 설정](https://firebase.google.com/docs/admin/setup).
2. 비공개 키를 serviceAccountKey.json 이름으로 저장하고 firebase-custom-token-sample 폴더에 넣으세요.
3. 일반설정에서 '웹 앱에 Firebase 추가'를 누르고, config 부분의 json 내용을 복사해서 customTokenRuleConfig.json 파일에 넣으세요.
2. customTokenRuleConfig.json 파일을 JSON 가져오기로 파이어베이스 데이터베이스에 넣으세요.
3. databaseRule.json 파일 내용을 복사해서 파이어베이스 데이터베이스 규칙에 붙여넣으세요.
4. generate-firebase-custom-token.js 파일에 파이어베이스 데이터베이스에서 가져온 uid를 uid 변수에 넣습니다.
5. 아래 명령어를 실행하세요.

```
node test-custom-token.js `node generate-firebase-custom-token.js` official_paper/private/ko
```

결과 : 

```
Firebase custom token test is running!
retrieved data : "무당만 읽을 수 있는 데이터 입니다."'
```

만약  '/official_paper/private/es'에 접근을 시도한다면 권한이 없다는 아래의 메시지가 출력됩니다.

```
errorCode: PERMISSION_DENIED message : permission_denied at /official_paper/private/es: Client doesn't have permission to access the desired data.
```

## 참고
* [https://firebase.google.com/docs/admin/setup](https://firebase.google.com/docs/admin/setup)
* [https://firebase.google.com/docs/auth/admin/create-custom-tokens](https://firebase.google.com/docs/auth/admin/create-custom-tokens)
* [https://firebase.google.com/docs/reference/security/database](https://firebase.google.com/docs/reference/security/database)
