import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';

export default withPageAuthRequired(
  async function ProfileServer() {
    const session = await getSession();

    const user = session?.user;

    return user ? (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    ) : (
      <p>No user found</p>
    );
  },
  { returnTo: '/profile' }
);
