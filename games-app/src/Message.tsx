import Card from './Components/Card';
const Message = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <Card
        title="My Cool Card"
        description="This is a beautiful card component built with React and Tailwind CSS in TypeScript."
        image="https://source.unsplash.com/400x300/?nature"
      />
    </div>
  )
}

export default Message