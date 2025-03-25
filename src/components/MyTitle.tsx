interface TitleProps {
  title: string;
  color: string;
  subtitle?: string;
}

function JudulHalaman({ color, title, subtitle }: TitleProps) {
  return (
    <div style={{ paddingBottom: 40, backgroundColor: "#83ff9e" }}>
      <h1
        style={{
          color: color,
        }}
      >
        {title}
      </h1>
      <h3 style={{ color: "black" }}>{subtitle}</h3>
    </div>
  );
}

export default JudulHalaman;
