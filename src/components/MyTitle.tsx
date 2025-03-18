interface TitleProps {
  title: string;
}

function JudulHalaman({ title }: TitleProps) {
  return (
    <h1
      style={{
        color: "#ba4e00",
        paddingBottom: 40,
        backgroundColor: "#83ff9e",
      }}
    >
      {title}
    </h1>
  );
}

export default JudulHalaman;
