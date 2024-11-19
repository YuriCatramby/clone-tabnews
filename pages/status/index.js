function CapsLock(proprities) {
  const upperText = proprities.text.toUpperCase();
  return upperText;
}

export default function StatusPage() {
  return (
    <>
      <h1>Status</h1>
      <CapsLock text="text test" />
    </>
  );
}
