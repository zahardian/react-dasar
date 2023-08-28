const CardProfile = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-sm flex flex-col justify-between mx-auto">
      <div className="p-10 text-center bg-slate-200 rounded-xl">{children}</div>
    </div>
  );
};

const Profile = (props) => {
  const { image } = props;
  return (
    <img src={image} alt="profile" className="rounded-full w-40 h-40 mx-auto" />
  );
};

const Description = (props) => {
  const { nickname, children } = props;
  return (
    <div className="mt-5">
      <h1 className="font-bold text-lg">{nickname}</h1>
      <p>{children}</p>
    </div>
  );
};

CardProfile.Profile = Profile;
CardProfile.Description = Description;

export default CardProfile;
