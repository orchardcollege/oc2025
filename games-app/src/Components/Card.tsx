type CardProps = {
    title: string;
    description: string;
    image: string;
  };
  
  const Card: React.FC<CardProps> = ({ title, description, image }) => {
    return (
      <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white hover:scale-105 transition-transform">
        <img className="w-full h-48 object-cover" src={image} alt={title} />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    );
  };
  
  export default Card;