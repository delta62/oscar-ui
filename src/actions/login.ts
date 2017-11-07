export function loginAction(intent, present) {
  Promise.resolve()
    .then(() => present({
      email: intent.email,
      token: 'abc123'
    }))
}
