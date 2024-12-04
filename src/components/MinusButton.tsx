interface MinusButtonProps {
  onSubmit: () => void;
}
export default function MinusButton({onSubmit}: MinusButtonProps) {
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      onSubmit(); //trigger the onMinus callback
    }
    return (
<form className="" onSubmit={handleSubmit}>
          <button type='submit' className="minus-btn">-</button>
</form>
  );
}