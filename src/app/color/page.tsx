export default function Home() {
  return (
    <main>
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', height: '100vh' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ flexGrow: 1, background: 'var(--black)' }}>black</div>
          <div style={{ flexGrow: 1, background: 'var(--gray-950)' }}>950</div>
          <div style={{ flexGrow: 1, background: 'var(--gray-900)' }}>900</div>
          <div style={{ flexGrow: 1, background: 'var(--gray-850)' }}>850</div>
          <div style={{ flexGrow: 1, background: 'var(--gray-800)' }}>800</div>
          <div style={{ flexGrow: 1, background: 'var(--gray-700)' }}>700</div>
          <div style={{ flexGrow: 1, background: 'var(--gray-600)' }}>600</div>
          <div style={{ flexGrow: 1, background: 'var(--gray-500)' }}>500</div>
          <div style={{ flexGrow: 1, background: 'var(--gray-400)' }}>400</div>
          <div style={{ flexGrow: 1, background: 'var(--gray-300)' }}>300</div>
          <div style={{ flexGrow: 1, background: 'var(--gray-200)' }}>200</div>
          <div style={{ flexGrow: 1, background: 'var(--gray-150)' }}>150</div>
          <div style={{ flexGrow: 1, background: 'var(--gray-100)' }}>100</div>
          <div style={{ flexGrow: 1, background: 'var(--gray-50)' }}>50</div>
        </div>
        <div
          style={{
            background: 'linear-gradient(to bottom, var(--gray-950) 0%, var(--gray-50) 100%',
          }}
        />
      </section>
    </main>
  );
}
