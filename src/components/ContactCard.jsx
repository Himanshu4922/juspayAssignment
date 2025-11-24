function ContactCard({ cardItem }) {
  const avatarURL = cardItem.avatarUrl;
  return (
    <div className="flex p-1 gap-2">
      <div className={`rounded-full self-start`}>
        <img
          className={`object-cover rounded-full align-top`}
          src={avatarURL}
        />
      </div>
      <div className={``}>
        <h3
          className={`text-woodsmoke-950 text-sm truncate max-w-48 dark:text-white`}
        >
          {cardItem.name}
        </h3>
      </div>
    </div>
  );
}

export default ContactCard;
