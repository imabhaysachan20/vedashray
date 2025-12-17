"use client"
import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { FaBalanceScale, FaFileContract, FaChartLine, FaGlobeAmericas, FaLightbulb, FaHandshake } from "react-icons/fa"
import { useRouter } from 'next/navigation'
import { montserrat } from '../fonts/fonts' // Ensure this path is correct based on your project structure

const servicesData = [
  {
    icon: <FaBalanceScale className="w-8 h-8" />,
    title: "Corporate Law & ROC Compliance",
    items: [
      "Incorporation & Structuring - Company, LLP, OPC, Section 8, etc.",
      "ROC Filings & MCA Compliances - Annual filings, Director KYC, Deposit & MSME Returns, registers & minutes, dividends, XBRL"
    ]
  },
  {
    icon: <FaFileContract className="w-8 h-8" />,
    title: "Secretarial Audit & Meetings",
    items: [
      "Secretarial Audit - Compliance Health Check, Certificate in MGT-8",
      "Meetings - Issuance of Notice, agenda, and preparation of minutes of Board meetings, Committee meetings and general meetings"
    ]
  },
  {
    icon: <FaChartLine className="w-8 h-8" />,
    title: "SEBI & Listing Compliance",
    items: [
      "SEBI (LODR) - Reconciliation of Share Capital Audit & Demat Coordination, Shareholding Pattern, Investor Grievance, Compliance & Corporate Governance report",
      "Rights Issue, Bonus Issue, Buyback & Preferential Allotment, IPO, FPO"
    ]
  },
  {
    icon: <FaGlobeAmericas className="w-8 h-8" />,
    title: "FEMA, FDI & Cross-Border Advisory",
    items: [
      "FEMA & RBI Filings - FDI, FC-GPR, FC-TRS, FLA return, FATCA Norms, APR filing",
      "Setup of Foreign Subsidiaries, Branch & Liaison Offices"
    ]
  },
  {
    icon: <FaLightbulb className="w-8 h-8" />,
    title: "Portfolio Management Services Compliances",
    items: [
      "Monthly compliance - Filing of SEBI Monthly report in SEBI and APMI, Cyber compliances, Website updation, reports to clients",
      "Setup of Foreign Subsidiaries - Branch & Liaison Offices"
    ]
  },
  {
    icon: <FaHandshake className="w-8 h-8" />,
    title: "Legal, Labour & Allied Support",
    items: [
      "Legal Agreements - Drafting & Vetting of NDAs & MoUs",
      "Labour Law Compliance - Filing of Gratuity, PF, International Labour, Statutory Bonus and POSH Returns, etc."
    ]
  }
]

function ServicesGrid() {
  const router = useRouter()

  const handleRedirect = (service) => {
    router.push(`/contact?source=${service}`)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
      {servicesData.map((service, index) => (
        <Card 
          key={index}
          onClick={() => handleRedirect(service.title)}
          className="bg-white border-none shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full rounded-xl overflow-hidden group"
        >
          <CardHeader className="pb-2">
            <div className="flex flex-col items-center text-center gap-4 mb-4">
              <div className="text-[#320b54] p-4 rounded-full bg-[#E3DBEB] group-hover:bg-[#320b54] group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>

              <CardTitle className={`text-xl sm:text-2xl font-bold text-[#320b54] leading-tight ${montserrat.className}`}>
                {service.title}
              </CardTitle>
            </div>
          </CardHeader>
          
          <CardContent>
            <ul className="space-y-3">
              {service.items.map((item, itemIndex) => {
                const parts = item.split(' - ');
                const title = parts[0];
                const description = parts.slice(1).join(' - ');

                return (
                  <li key={itemIndex} className={`flex items-start gap-3 text-[#320b54]/80 leading-relaxed text-sm sm:text-base ${montserrat.className}`}>
                    <span className="h-2 w-2 mt-2 rounded-full bg-[#320b54] flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                    <span>
                      <strong className="text-[#320b54] font-semibold block sm:inline">{title}</strong>
                      {description && <span className="block sm:inline sm:ml-1 text-gray-600"> - {description}</span>}
                    </span>
                  </li>
                )
              })}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default ServicesGrid