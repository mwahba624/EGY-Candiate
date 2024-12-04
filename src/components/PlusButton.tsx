interface PlusButtonProps {
  onSubmit: () => void;
}
export default function PlusButton({ onSubmit }: PlusButtonProps) {
      function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        onSubmit(); //trigger onPlus callback
      }
      return (
<form className="" onSubmit={handleSubmit}>
            <button type='submit' className="plus-btn">+</button>
</form>
    );
}