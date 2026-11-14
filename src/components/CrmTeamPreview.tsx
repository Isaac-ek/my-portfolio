import { useState } from 'react';

type Role = 'MEMBER' | 'ADMIN' | 'OWNER';
const permissions: Record<Role, { deleteLead: boolean; manageMembers: boolean }> = {
  MEMBER: { deleteLead: false, manageMembers: false },
  ADMIN: { deleteLead: true, manageMembers: true },
  OWNER: { deleteLead: true, manageMembers: true },
};

export default function CrmTeamPreview({ currentStage }: { currentStage: 'New' | 'Qualified' }) {
  const [visibleStage, setVisibleStage] = useState<'New' | 'Qualified'>('New');
  const [role, setRole] = useState<Role>('MEMBER');
  const stale = visibleStage !== currentStage;

  return (
    <section className="crm-team-preview" aria-labelledby="teammate-title">
      <div>
        <p className="case-eyebrow">A SECOND TEAMMATE</p>
        <h3 id="teammate-title">What changes in another view?</h3>
        <p>These two local views illustrate the saved-state behavior in the source. The second view keeps its snapshot until you refresh it. The production app reads the saved record on refresh or navigation.</p>
        <p className="case-muted">This is part of the reconstruction above. It does not open a second authenticated production session.</p>
      </div>
      <div className="teammate-card">
        <label htmlFor="teammate-role">Teammate’s workspace role</label>
        <select id="teammate-role" value={role} onChange={(event) => setRole(event.target.value as Role)}>
          <option value="MEMBER">Member</option>
          <option value="ADMIN">Admin</option>
          <option value="OWNER">Owner</option>
        </select>
        <div className="teammate-stage" role="status">
          <p>Maya Cole · visible stage: <strong>{visibleStage}</strong></p>
          <p>{stale ? `A newer saved stage is ${currentStage}. Refresh this view to read it.` : 'This view matches the current sample record.'}</p>
        </div>
        <button className="case-secondary" onClick={() => setVisibleStage(currentStage)}>Refresh teammate view</button>
        <dl className="teammate-permissions">
          <div><dt>Read and edit leads</dt><dd>Allowed</dd></div>
          <div><dt>Add notes</dt><dd>Allowed</dd></div>
          <div><dt>Delete leads</dt><dd>{permissions[role].deleteLead ? 'Allowed' : 'Blocked'}</dd></div>
          <div><dt>Manage members</dt><dd>{permissions[role].manageMembers ? 'Allowed' : 'Blocked'}</dd></div>
        </dl>
        <a className="case-inline-link" href="https://github.com/Isaac-ek/Indie-CRM/blob/main/src/lib/rbac.ts" target="_blank" rel="noopener noreferrer">Inspect the permission rules ↗</a>
      </div>
    </section>
  );
}
