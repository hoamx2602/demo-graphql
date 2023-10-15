import * as jwt from 'jsonwebtoken';

export const privateKey = `-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEAi+7opqOwGkDUHDuD5l75zMxprIjos1MdzrXvhJNbGCnMl0bh
AbSMoywFRtolD1de9vhGWNCGkfl/cRXMplTPxmdO7nnT6koPvbnqU8lLMbVMoZUN
zhxhuPGFWKAgfmueaqdByzDwvgse/0eUnjl1bqAHa6LLqX/V7ZJbHk372yvRfbLi
1h54IIeSU/8hK9cpJkhRwDjrCAw16trdD5z/3UWk/Wl7W1ul4zQUm9XdtlddAxN7
3NoVwdlCIAKg7bp4fEe3kZViiIt1zn+fkdD0PxWRrbcZnziSe6FU5QOufx0rxK7I
5T/gRHKB0vmb6v2lzmcPaRoIxHgcGGjqDi4vZQIDAQABAoIBAF9s6NLaxXjhxMQM
AgLTud3jeBzksGu5vpX8k/4AzxpHRvHSsBaNnWqY1nBeyu8PUf9xh+eBLIPXdQUV
LJ4xMA/I25bdFZqsLtffNOE2YEThsgRutR9dU3bfnWO2rvIHSdzJeqCqG0I+K0FC
+yJ7ZI2wK99HAUPxnV2JdQHRhHMNBzWi81k5dHyImYRRzdqUYFvEAzsem1RWy8dm
cHhd8jmarq+tA3B2nnOZanBTaNqFY0l+asx4VIc3IPD+QnGHDj8s2qXDa1+mGHq6
bY/2oyXKchvy0qGh9ebFOEqFnDhyazvJNPu6snBRX0shC2btLCOyymFNiTGN33vM
P92bkvECgYEA0WHebGg1461d7brCwMGt/cm2YIwxGI8JzgxJoEJqD0bkxWYTTclZ
Hb4DIpZxv+3mAqJ8AX599GjTOvumw0PmU4dyhligycLVBr2D8eNBbrZvuvBZui9r
iKdbvcfJvpcwQsUTrQnSdruzMpoF8g31aJo0U7dWBRXjE6ehFRFtks8CgYEAqxap
isZG5nzZL5RtmlXBivODw+M1RCuB73PIbyWaoFnQ2DMqWgjp0MmoMVFnXPbZtWRF
VeAj/T2Nts9++Ipz+36/Xoc2WUmWfkaDP9OEZCvAfIr5ntUpclnsvdCM9LStoMQZ
lKsy29OmIYhFxFmsF0GKEDHYqsOk3Abbsu3LN4sCgYEAjmlRnkxW8u905n/TfMV+
8RHkUNCph/mqApJK9YyWlKN0cGrYEF01lswpV7oZziAiBIK9c0q0oqs1mHWXXFJv
czq6A3R+kBxLRhVajAg09fdyESTu8nrUWhLyjCc6Kb6tXYyrsFLw6j8KSA2Io7Uo
yKexlYsqH7VeSH0IS8sZyvMCgYBiB38ni8puIFUVRRez2bUm17bFE7eekstFl3Ld
9I7vl+bpKg/3PKo0PoeHkpwGEU7W91gfB2m3nYBIogWfhT1Fee9Oy2yhpl97hQ2J
EboG52bINZ0nm/2+jrXuYMOTJr9hoVsC60Ed4dyL1BgdlD/dp2jjNJxv49/fTnKt
yECrVwKBgQCvyAGVWLkgTaP4f7Ut46UhzK61mPCiZnGzTa4gUhvEaXeC9vqjdRcD
o+pYIhojDFT15sx3/IB/3O3g33tp8rpHuHYDSzCdgCHVqf/dJ2NB2pp7wQg0CIqa
r6iNa0d5DAmZ6Oip8oTWDk0UTcTZARBW/CUvWkiJY4/XQwyn6IqDeQ==
-----END RSA PRIVATE KEY-----`;

export const publicKey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAi+7opqOwGkDUHDuD5l75
zMxprIjos1MdzrXvhJNbGCnMl0bhAbSMoywFRtolD1de9vhGWNCGkfl/cRXMplTP
xmdO7nnT6koPvbnqU8lLMbVMoZUNzhxhuPGFWKAgfmueaqdByzDwvgse/0eUnjl1
bqAHa6LLqX/V7ZJbHk372yvRfbLi1h54IIeSU/8hK9cpJkhRwDjrCAw16trdD5z/
3UWk/Wl7W1ul4zQUm9XdtlddAxN73NoVwdlCIAKg7bp4fEe3kZViiIt1zn+fkdD0
PxWRrbcZnziSe6FU5QOufx0rxK7I5T/gRHKB0vmb6v2lzmcPaRoIxHgcGGjqDi4v
ZQIDAQAB
-----END PUBLIC KEY-----`;

export function signJwt(payload) {
  return jwt.sign(payload, privateKey, { algorithm: 'RS256' });
}

export function decode(token: string) {
  if (!token) return null;
  try {
    const decoded = jwt.verify(token, publicKey);

    return decoded;
  } catch (error) {
    console.error(`error`, error);
    return null;
  }
}
