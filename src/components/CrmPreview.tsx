import { Link } from 'react-router-dom';

export default function CrmPreview() {
  return (
    <figure className="mt-5 border border-white/10 bg-[#141418] overflow-hidden">
      <Link to="/projects/indie-crm" aria-label="Open Indie CRM case study and public walkthrough" className="block relative">
        <img src="/assets/projects/indie-crm/lead-detail.png" alt="Actual Indie CRM screen showing Maya Cole’s sample lead, workspace access, and relationship context" className="aspect-[9/7] w-full object-cover object-top" loading="lazy" />
        <span aria-hidden="true" className="absolute left-[28%] top-[12%] flex h-5 w-5 items-center justify-center rounded-full bg-emerald-700 text-white font-mono text-[10px] border border-white">1</span>
        <span aria-hidden="true" className="absolute right-[5%] top-[14%] flex h-5 w-5 items-center justify-center rounded-full bg-emerald-700 text-white font-mono text-[10px] border border-white">2</span>
        <span aria-hidden="true" className="absolute left-[62%] top-[81%] flex h-5 w-5 items-center justify-center rounded-full bg-emerald-700 text-white font-mono text-[10px] border border-white">3</span>
      </Link>
      <figcaption className="p-3 font-mono text-[10px] text-[#a1a1aa] border-t border-white/10 space-y-3">
        <span className="block">ACTUAL APPLICATION · SEEDED SAMPLE DATA</span>
        <ol className="grid grid-cols-3 gap-3 leading-relaxed text-[#d4d4d8]">
          <li>1 / Lead &amp; contact</li>
          <li>2 / Workspace &amp; role</li>
          <li>3 / Context &amp; next action</li>
        </ol>
      </figcaption>
    </figure>
  );
}
