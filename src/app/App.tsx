import { useState } from 'react'

interface ColorBlock {
  name: string
  variable: string
  value: string
  description: string
}

function App() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'profile' | 'projects' | 'terminal'>('profile')
  const [terminalCommand, setTerminalCommand] = useState('')
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    'Initializing portfolio agent...',
    'Loading custom color palette from variables...',
    'System ready. Type "help" to see available commands.',
  ])

  const colors: ColorBlock[] = [
    { name: 'Background (Fundo)', variable: '--bg', value: '#15171A', description: 'Fundo principal da aplicação' },
    { name: 'Surface (Cards)', variable: '--surface', value: '#1D2024', description: 'Blocos elevados, cards e painéis' },
    { name: 'Surface-2 (Sub-itens)', variable: '--surface-2', value: '#232629', description: 'Barras, inputs e detalhes internos' },
    { name: 'Ink (Texto Principal)', variable: '--ink', value: '#E8E6E1', description: 'Leitura principal de alta legibilidade' },
    { name: 'Muted (Texto Secundário)', variable: '--muted', value: '#8A8D91', description: 'Descrições, datas e legendas de apoio' },
    { name: 'Accent (Botão / Links)', variable: '--accent', value: '#6B8F71', description: 'Cor de destaque, botões e marcações' },
    { name: 'Accent Soft (Tag Fundo)', variable: '--accent-soft', value: 'rgba(107,143,113,.16)', description: 'Fundo leve de tags e destaques sutis' },
    { name: 'Line (Bordas)', variable: '--line', value: '#2B2E33', description: 'Divisórias, bordas finas e limites' },
  ]

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedColor(text)
    setTimeout(() => setCopiedColor(null), 2000)
  }

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const cmd = terminalCommand.trim().toLowerCase()
    if (!cmd) return

    let response = ''
    switch (cmd) {
      case 'help':
        response = 'Available commands: clear, colors, about, contact'
        break
      case 'clear':
        setTerminalLogs([])
        setTerminalCommand('')
        return
      case 'colors':
        response = 'Palette: --bg (#15171A), --surface (#1D2024), --accent (#6B8F71)'
        break
      case 'about':
        response = 'GP Portfolio - Created with React, Tailwind CSS v4 and custom design tokens.'
        break
      case 'contact':
        response = 'Contact: github.com/gp | gp@example.com'
        break
      default:
        response = `Command not found: "${cmd}". Type "help" for a list of commands.`
    }

    setTerminalLogs((prev) => [...prev, `gp-portfolio$ ${terminalCommand}`, response])
    setTerminalCommand('')
  }

  return (
    <div className="min-h-screen bg-bg text-ink flex flex-col justify-between p-4 md:p-8 relative overflow-hidden font-sans selection:bg-accent selection:text-bg">
      {/* Decorative ambient glowing spheres with the user's accent color */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent rounded-full filter blur-[150px] opacity-10 animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent rounded-full filter blur-[150px] opacity-10 animate-pulse pointer-events-none"></div>

      {/* Header / Navbar */}
      <header className="max-w-6xl w-full mx-auto flex items-center justify-between z-10 py-4 border-b border-line font-sans">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center font-semibold text-bg text-lg shadow-md shadow-accent/10">
            G
          </div>
          <span className="font-semibold text-lg tracking-tight">GP <span className="text-accent">.</span></span>
        </div>
        <div className="flex gap-1 bg-surface-2 p-1 rounded-full border border-line">
          <button
            onClick={() => setActiveTab('profile')}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
              activeTab === 'profile' ? 'bg-accent text-bg shadow-sm' : 'text-muted hover:text-ink'
            }`}
          >
            Apresentação
          </button>
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
              activeTab === 'projects' ? 'bg-accent text-bg shadow-sm' : 'text-muted hover:text-ink'
            }`}
          >
            Cores & Design
          </button>
          <button
            onClick={() => setActiveTab('terminal')}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
              activeTab === 'terminal' ? 'bg-accent text-bg shadow-sm' : 'text-muted hover:text-ink'
            }`}
          >
            Console Interativo
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-6xl w-full mx-auto z-10 py-12 flex-grow flex flex-col justify-center">
        {activeTab === 'profile' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fade-in">
            {/* Left side: Intro info */}
            <div className="lg:col-span-7 space-y-6">
              {/* Eyebrow: Mono & peso 500 */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft border border-accent/20 text-xs text-accent font-mono font-medium shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping"></span>
                Tema Customizado Ativo
              </div>
              {/* H1: Display & peso 700 */}
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] font-display">
                Crie experiências incríveis com <span className="text-accent underline decoration-2 underline-offset-8 decoration-accent/40">precisão</span> estética.
              </h1>
              {/* Parágrafo: Corpo & peso 400 */}
              <p className="text-muted text-base md:text-lg font-normal leading-relaxed max-w-xl font-sans">
                O portfólio está configurado utilizando o seu guia de estilos e variáveis de cores. Uma paleta minimalista baseada em tons de ardósia escuros com detalhes em verde sálvia.
              </p>
              
              {/* Tags: Mono & peso 500 */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 text-xs font-medium font-mono rounded bg-accent-soft text-accent">--bg: #15171A</span>
                <span className="px-3 py-1 text-xs font-medium font-mono rounded bg-accent-soft text-accent">--surface: #1D2024</span>
                <span className="px-3 py-1 text-xs font-medium font-mono rounded bg-accent-soft text-accent">--accent: #6B8F71</span>
              </div>

              {/* Botões: Corpo & peso 600 */}
              <div className="flex gap-4 pt-4 font-sans">
                <button
                  onClick={() => setActiveTab('projects')}
                  className="px-6 py-3 font-semibold text-sm bg-accent text-bg rounded-xl shadow-lg shadow-accent/15 hover:brightness-110 active:scale-98 transition-all cursor-pointer"
                >
                  Ver Paleta de Cores
                </button>
                <button
                  onClick={() => setActiveTab('terminal')}
                  className="px-6 py-3 font-semibold text-sm bg-surface border border-line text-ink rounded-xl hover:bg-surface-2 active:scale-98 transition-all cursor-pointer"
                >
                  Abrir Console
                </button>
              </div>
            </div>

            {/* Right side: Mock interface showcasing colors */}
            <div className="lg:col-span-5">
              <div className="bg-surface border border-line rounded-2xl p-6 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between mb-4 border-b border-line pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-line"></span>
                    <span className="w-3 h-3 rounded-full bg-line"></span>
                    <span className="w-3 h-3 rounded-full bg-line"></span>
                  </div>
                  {/* Eyebrow: Mono & peso 400 */}
                  <span className="text-xs text-muted font-mono font-normal">card-preview.tsx</span>
                </div>

                <div className="space-y-4">
                  {/* Outer component representing surface */}
                  <div className="p-4 rounded-xl bg-surface-2 border border-line">
                    <div className="flex justify-between items-start mb-2">
                      {/* H3: Display & peso 600 */}
                      <h3 className="font-semibold text-ink text-sm font-display">Bloco Interno (Surface 2)</h3>
                      {/* Tag: Mono & peso 500 */}
                      <span className="text-[10px] uppercase font-mono font-medium px-2 py-0.5 bg-accent-soft text-accent rounded border border-accent/10">
                        Accent Soft
                      </span>
                    </div>
                    {/* Parágrafo: Corpo & peso 400 */}
                    <p className="text-xs text-muted leading-relaxed font-sans font-normal">
                      Este bloco utiliza <code className="text-accent bg-accent-soft/50 px-1 rounded font-mono font-normal">--surface-2</code> para se destacar do fundo do card principal.
                    </p>
                  </div>

                  {/* UI Buttons mockup */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-xl border border-line text-center">
                      {/* Eyebrow: Mono & peso 400 */}
                      <span className="block text-[10px] text-muted font-mono font-normal mb-1">Linha da borda</span>
                      <div className="h-1 bg-line rounded-full w-2/3 mx-auto"></div>
                    </div>
                    <div className="p-3 rounded-xl bg-accent-soft border border-accent/10 text-center flex flex-col justify-between">
                      {/* Eyebrow/Tag: Mono & peso 500 */}
                      <span className="block text-[10px] text-accent font-medium font-mono mb-1">Accent Soft Tag</span>
                      <div className="h-1 bg-accent/30 rounded-full w-2/3 mx-auto"></div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 right-0 w-24 h-24 bg-accent/5 rounded-full filter blur-xl"></div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center max-w-xl mx-auto space-y-2 mb-8">
              {/* H2: Display & peso 700 */}
              <h2 className="text-3xl font-bold tracking-tight font-display">Variáveis de Cores do Projeto</h2>
              {/* Parágrafo: Corpo & peso 400 */}
              <p className="text-muted text-sm font-normal font-sans">
                Estas são as variáveis que você forneceu. Elas estão mapeadas tanto no CSS nativo quanto em classes auxiliares do Tailwind CSS v4. Clique para copiar o valor.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {colors.map((color) => (
                <div
                  key={color.variable}
                  onClick={() => copyToClipboard(color.value)}
                  className="group relative bg-surface border border-line rounded-xl p-5 hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[160px] shadow-sm hover:shadow-md"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      {/* Mono & peso 500 */}
                      <span className="text-xs text-muted font-mono font-medium">{color.variable}</span>
                      {/* Mono & peso 500 */}
                      <span className="text-[10px] font-mono font-medium bg-surface-2 px-1.5 py-0.5 rounded text-muted">
                        Copiar
                      </span>
                    </div>
                    {/* H3: Display & peso 600 */}
                    <h3 className="font-semibold text-ink text-sm font-display">{color.name}</h3>
                    {/* Parágrafo: Corpo & peso 400 */}
                    <p className="text-xs text-muted line-clamp-2 font-sans font-normal">{color.description}</p>
                  </div>

                  <div className="mt-4 flex items-center gap-3 pt-3 border-t border-line/60">
                    <div
                      className="w-6 h-6 rounded border border-line flex-shrink-0"
                      style={{ backgroundColor: color.value }}
                    ></div>
                    {/* Mono & peso 500 */}
                    <span className="text-xs font-mono text-ink font-medium">{color.value}</span>
                  </div>

                  {copiedColor === color.value && (
                    <div className="absolute inset-0 bg-surface/95 border border-accent rounded-xl flex items-center justify-center backdrop-blur-sm transition-opacity animate-fade-in font-sans">
                      <div className="text-center">
                        <span className="text-accent text-xs font-semibold block mb-1">✓ Copiado!</span>
                        <span className="text-[10px] font-mono font-medium text-muted">{color.value}</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'terminal' && (
          <div className="max-w-3xl mx-auto w-full animate-fade-in">
            <div className="text-center space-y-2 mb-6">
              {/* H2: Display & peso 700 */}
              <h2 className="text-2xl font-bold tracking-tight font-display">Console de Desenvolvimento</h2>
              {/* Parágrafo: Corpo & peso 400 */}
              <p className="text-muted text-xs font-normal font-sans">
                Demonstração da variável <code className="text-accent font-mono font-normal">--surface-2</code> como cabeçalho do terminal e <code className="text-accent font-mono font-normal">--surface</code> como corpo de conteúdo elevado.
              </p>
            </div>

            {/* Terminal Mock */}
            <div className="bg-surface border border-line rounded-xl overflow-hidden shadow-2xl flex flex-col h-96">
              {/* Terminal Title Bar (Surface 2) */}
              <div className="bg-surface-2 px-4 py-3 border-b border-line flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#EF4444] opacity-80"></div>
                  <div className="w-3 h-3 rounded-full bg-[#F59E0B] opacity-80"></div>
                  <div className="w-3 h-3 rounded-full bg-[#10B981] opacity-80"></div>
                </div>
                {/* Eyebrow: Mono & peso 400 */}
                <div className="text-xs font-mono font-normal text-muted">terminal@gp-portfolio</div>
                <div className="w-12"></div>
              </div>

              {/* Terminal Logs (Surface) */}
              <div className="p-4 flex-grow font-mono text-xs overflow-y-auto space-y-2 text-ink/90 font-normal">
                {terminalLogs.map((log, index) => (
                  <div key={index} className="whitespace-pre-wrap leading-relaxed">
                    {log.startsWith('gp-portfolio$') ? (
                      /* Terminal command: Mono & peso 500 */
                      <span className="text-accent font-mono font-medium">{log}</span>
                    ) : (
                      /* Terminal log text: Mono & peso 400 */
                      <span className="font-mono font-normal">{log}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Terminal Input */}
              <form onSubmit={handleTerminalSubmit} className="bg-surface-2 border-t border-line flex items-center px-4 py-2">
                {/* Terminal input prompt: Mono & peso 500 */}
                <span className="text-accent font-mono text-xs font-medium mr-2">gp-portfolio$</span>
                {/* Terminal input: Mono & peso 400 */}
                <input
                  type="text"
                  value={terminalCommand}
                  onChange={(e) => setTerminalCommand(e.target.value)}
                  placeholder="type 'help' or commands like 'colors', 'about', 'clear'..."
                  className="bg-transparent text-ink font-mono text-xs font-normal outline-none border-none flex-grow placeholder:text-muted/50"
                  autoFocus
                />
              </form>
            </div>
          </div>
        )}
      </main>

      {/* Footer: Corpo & peso 400 */}
      <footer className="max-w-6xl w-full mx-auto z-10 py-6 border-t border-line flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted font-sans font-normal">
        <div>
          &copy; {new Date().getFullYear()} &bull; GP Portfolio
        </div>
        <div className="flex gap-4">
          <span className="text-accent font-mono font-medium">React 19</span>
          <span>&bull;</span>
          <span className="text-accent font-mono font-medium">Tailwind CSS v4</span>
          <span>&bull;</span>
          <span>Vite</span>
        </div>
      </footer>
    </div>
  )
}

export default App
