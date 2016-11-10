# Firebase custom token sample ([한국어로 보기](readme-ko.md))

It generate a firebase custom token and test the token working properly with firebase database rule. 

----

## Setup

Run commands below.
```
git clone https://github.com/dorajistyle/firebase-custom-token-sample.git
cd firebase-custom-token-sample
npm install
```

### Using generated token to access sample firebase database

Run commands below.

```
node test-custom-token.js eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGFpbXMiOnsicm9sZSI6InNoYW1hbiJ9LCJ1aWQiOiI5OGY5NGJjMi03MTE4LTQ3YTYtOThmMC1mYzY1MTQ5NzEzZTAiLCJpYXQiOjE0Nzg3NTMwNTYsImV4cCI6MTQ3ODc1NjY1NiwiYXVkIjoiaHR0cHM6Ly9pZGVudGl0eXRvb2xraXQuZ29vZ2xlYXBpcy5jb20vZ29vZ2xlLmlkZW50aXR5LmlkZW50aXR5dG9vbGtpdC52MS5JZGVudGl0eVRvb2xraXQiLCJpc3MiOiJmaXJlYmFzZS1hZG1pbnNkay05emZwdUBjdXN0b20tdG9rZW4tcnVsZS5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInN1YiI6ImZpcmViYXNlLWFkbWluc2RrLTl6ZnB1QGN1c3RvbS10b2tlbi1ydWxlLmlhbS5nc2VydmljZWFjY291bnQuY29tIn0.f0rysM4iCpbgHHAJ2-iPXs1hIbAE479Xjq4jQeBe0QINGvVo0Va6JEVobCHRPZdFPvVQCTA2pXTrIepQszBx7qGQM3VaZwf3We97MeZkCKryUV7OfcT4uzv27rnJJY2NTDm08N5qAJBkt_bEOExLNuboLp_coo8NxTPmsReM4pGjYJIfeeT_LFfC8gdzqU9ZAAe40PqR4urUwC5lEVEzRxi4z4U0M3Rp1TKGPvitMXR9NnsDSIotp9a5_W1r7s9N233aHTt9RKL5fsJkbb53Edvr9q2UKquo1oL9Dsyqqd_-k6h5j934sZLsm-Jw55WQ0DbXLZSLwns1WnFvDZGdeg /official_paper/private/en
```

Results : 

```
Firebase custom token test is running!
retrieved data : "It is a secret data for custom token rule. Only shaman can access this data."'
```

If you tried to access '/official_paper/private/es' you can see the below result.

```
errorCode: PERMISSION_DENIED message : permission_denied at /official_paper/private/es: Client doesn't have permission to access the desired data.
```

### Using your own firebase

1. Create a firebase project and generate new private key through the document [Firebase admin setup](https://firebase.google.com/docs/admin/setup).
2. Save the private key as serviceAccountKey.json and put it into firebase-custom-token-sample folder.
3. Click Add Firebase to your web app(https://console.firebase.google.com/project/your-database/settings/general/) and copy config json contents into customTokenRuleConfig.json file.
2. Import customTokenRuleConfig.json file into your firebase database.
3. Copy contents from databaseRule.json and paste it to your firebase database rule.
4. Get uid from firebase database and put it into uid variable of generate-firebase-custom-token.js file.
5. Run commands below.

```
node test-custom-token.js `node generate-firebase-custom-token.js` official_paper/private/en
```

Results : 

```
Firebase custom token test is running!
retrieved data : "It is a secret data for custom token rule. Only shaman can access this data."'
```

If you tried to access '/official_paper/private/es' you can see the below result.

```
errorCode: PERMISSION_DENIED message : permission_denied at /official_paper/private/es: Client doesn't have permission to access the desired data.
```

## References
* [https://firebase.google.com/docs/admin/setup](https://firebase.google.com/docs/admin/setup)
* [https://firebase.google.com/docs/auth/admin/create-custom-tokens](https://firebase.google.com/docs/auth/admin/create-custom-tokens)
* [https://firebase.google.com/docs/reference/security/database](https://firebase.google.com/docs/reference/security/database)

