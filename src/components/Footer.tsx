const links = {
  Product: ['Download', 'Features', 'Changelog', 'Roadmap'],
  Support: ['Documentation', 'FAQ', 'GitHub Issues', 'Privacy Policy'],
  Community: ['Discord', 'Twitter / X', 'Reddit', 'Contact'],
}

export default function Footer() {
  return (
    <footer className="w-full max-w-[1536px] mx-auto px-3 md:px-5 pb-10">
      <div
        className="rounded-[1.5rem] md:rounded-[3rem] px-8 md:px-16 py-12"
        style={{ borderTop: '1px solid rgba(30,50,90,0.08)', background: 'rgba(30,50,90,0.01)' }}
      >
        <div className="flex flex-col md:flex-row gap-12 justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <p className="text-lg font-semibold text-[#1a1a2e] tracking-tight mb-3">InterviewEdge</p>
            <p className="text-sm text-[rgba(30,50,90,0.45)] leading-relaxed">
              The invisible AI overlay that helps you ace coding interviews in real time — completely undetectable on any screen share.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-3 gap-8 md:gap-16">
            {Object.entries(links).map(([category, items]) => (
              <div key={category}>
                <p className="text-xs font-semibold text-[rgba(30,50,90,0.35)] uppercase tracking-widest mb-4">
                  {category}
                </p>
                <ul className="space-y-2.5">
                  {items.map(item => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-sm text-[rgba(30,50,90,0.4)] hover:text-[#1a1a2e] transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2" style={{ borderTop: '1px solid rgba(30,50,90,0.06)' }}>
          <p className="text-xs text-[rgba(30,50,90,0.3)]">© 2025 InterviewEdge. All rights reserved.</p>
          <p className="text-xs text-[rgba(30,50,90,0.3)]">Built for candidates who take winning seriously.</p>
        </div>
      </div>
    </footer>
  )
}
