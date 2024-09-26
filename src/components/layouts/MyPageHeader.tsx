function MyPageHeader({ text }: { text: string }) {
  return (
    <header className="p-4">
      <div className="text-3xl font-extrabold">{text}</div>
    </header>
  );
}

export default MyPageHeader;
