
// 1. Full Content for all 3 Blogs
const blogData = {
  "annual-filings": {
    title: "Why Annual Filings Are More Than Just a Compliance Task",
    content: (
      <>
        <p className="mb-6">
          When it comes to corporate secretarial compliance in India, many businesses treat annual filings as just another box to tick. But your annual return filing and ROC compliance activities are far more important than routine paperwork — they form the foundation of your company’s credibility and governance reputation.
        </p>
        
        <h3 className="text-[#320b54] font-bold text-xl mb-3">Annual Filings Reflect Your Company’s Health</h3>
        <p className="mb-6">
          Every registered company in India must file its Annual Return (Form MGT-7) and Financial Statements (Form AOC-4) with the Registrar of Companies (ROC) each year. These documents serve as a transparent record of the company’s ownership, financial position, and statutory governance. Investors, regulators, and even potential clients often review these filings before making decisions — making accuracy and timeliness crucial.
        </p>

        <h3 className="text-[#320b54] font-bold text-xl mb-3">Beyond Compliance — Building Corporate Trust</h3>
        <p className="mb-6">
          A qualified Company Secretary doesn’t just ensure you meet deadlines. They help your business maintain clean governance practices, proper record-keeping, and compliant board operations. This builds long-term trust with regulators and stakeholders — an advantage that goes far beyond statutory obligations.
        </p>

        <h3 className="text-[#320b54] font-bold text-xl mb-3">The Smart Way Forward</h3>
        <p className="mb-6">
          For growing businesses, partnering with Company Secretarial experts in India ensures stress-free compliance and reduced risk of penalties. Proactive compliance not only safeguards your business but also signals professionalism and reliability to the market.
        </p>
        <p>
          After all, in today’s competitive environment, good compliance is smart business.
        </p>
      </>
    )
  },
  "aoc-4-mystery": {
    title: "Decoding the Mystery of the AOC-4: MCA Filings in India",
    content: (
      <>
        <p className="mb-6">
          Corporate secretarial compliances might sound dry, but they're the backbone of corporate governance in
          India. One of the most critical and recurring tasks for every company is the annual filing with the Ministry of
          Corporate Affairs (MCA). And the star of this show? Form AOC–4, the e-form for filing a company's
          financial statements.
        </p>

        <h3 className="text-[#320b54] font-bold text-xl mb-3">Why is AOC–4 so Important?</h3>
        <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>
                <strong>Public Disclosure:</strong> Once filed, this information is available for public inspection (upon payment of a fee),
                promoting transparency and accountability.
            </li>
            <li>
                <strong>Compliance:</strong> Filing on time is a statutory obligation under the Companies Act, 2013. Failure to comply
                leads to heavy penalties and may even result in the company being declared "Dormant" or "Struck Off."
            </li>
        </ul>

        <h3 className="text-[#320b54] font-bold text-xl mb-3">The XBRL Twist</h3>
        <p className="mb-4">
          For certain classes of companies (like listed companies, or companies above a certain turnover/paid-up
          capital threshold), the financial statements must be filed not just as a regular PDF, but in the eXtensible
          Business Reporting Language (XBRL) format.
        </p>
        <p className="mb-6">
          XBRL is a structured data language that makes financial information computer-readable and easily
          comparable. This requirement adds a layer of complexity, demanding specialized software and expertise to
          map the financial data correctly to the MCA's prescribed taxonomy. It's a leap toward digitized financial
          reporting and global standards!
        </p>

        <div className="bg-[#f0ebf5] p-4 rounded-lg border-l-4 border-[#320b54]">
            <p className="font-bold text-[#320b54]">
                Staying compliant with AOC–4 ensures your company remains in good legal standing, avoiding
                unnecessary fines and regulatory scrutiny. It’s the cornerstone of a well-governed Indian company!
            </p>
        </div>
      </>
    )
  },
  "sbo-concept": {
    title: "Unraveling the 'Significant Beneficial Owner' (SBO) Concept in India",
    content: (
      <>
        <p className="mb-6">
           In the intricate world of corporate compliance, transparency is paramount. India, like many other nations,
           has been on a drive to identify the ultimate real owners of companies, rather than just the shell entities
           or nominees. This is where the concept of a Significant Beneficial Owner (SBO) comes into play, under
           Section 90 of the Companies Act, 2013, read with the Companies (SBO) Rules, 2018.
        </p>

        <h3 className="text-[#320b54] font-bold text-xl mb-3">What is an SBO?</h3>
        <p className="mb-6">
          An SBO is an individual who holds ultimate beneficial interest of not less than 10% in a company. This
          "beneficial interest" isn't always direct; it can be held indirectly, or through a combination of direct and
          indirect holdings. The aim is to peel back the layers of corporate structures – like trusts, partnerships, or
          other companies – to find the human being who truly controls or benefits from the shares.
        </p>

        <h3 className="text-[#320b54] font-bold text-xl mb-3">The Importance of Identification and Declaration</h3>
        <ol className="list-decimal pl-5 mb-6 space-y-4">
            <li>
                <strong>Anti-Money Laundering (AML) / Combating Financing of Terrorism (CFT):</strong> It prevents companies from
                being used as conduits for illicit financial activities by exposing the true beneficiaries.
            </li>
            <li>
                <strong>Corporate Governance:</strong> It promotes greater accountability and makes it harder for individuals to hide
                their true interests or avoid liabilities.
            </li>
            <li>
                <strong>Regulatory Compliance:</strong> It helps regulatory bodies monitor ownership patterns and prevent market
                manipulation or fraudulent activities.
            </li>
        </ol>

        <h3 className="text-[#320b54] font-bold text-xl mb-3">The Bottom Line</h3>
        <p className="mb-6">
           For businesses, it's not just about filling out a form; it's about understanding the spirit of the law –
           knowing who truly owns and controls your company – and meticulously documenting it.
        </p>
      </>
    )
  }
}

export default blogData