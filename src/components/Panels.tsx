// Small illustrated UI panels for the work cards. Figures come from the real projects.

const mini = "min-h-[186px] overflow-hidden rounded-xl border border-ink/10 bg-white text-[0.85rem]";
const head = "flex items-center justify-between border-b border-ink/10 px-4 py-3 font-medium";
const status = "inline-flex items-center gap-1.5 text-[0.78rem] font-normal text-ink/60 before:size-1.5 before:rounded-full before:bg-ink before:content-['']";
const row = "flex items-center gap-3.5 border-b border-ink/10 px-4 py-2.5 last:border-b-0";
const pill = "shrink-0 rounded-full border border-ink/20 px-2 py-0.5 text-[0.74rem]";
const pillDark = "shrink-0 rounded-full border border-ink bg-ink px-2 py-0.5 text-[0.74rem] text-bg";
const mark = "rounded-[3px] bg-mint px-1";

export function AiCoachPanel() {
  return (
    <div className={mini} aria-hidden="true">
      <div className={head}>Setup AI <span className={status}>Answered</span></div>
      <div className="flex flex-col gap-2.5 p-4">
        <div className="max-w-[88%] self-end rounded-xl bg-ink px-3 py-2 leading-[1.45] text-bg">Why was my week negative?</div>
        <div className="max-w-[88%] rounded-xl bg-ink/5 px-3 py-2 leading-[1.45]">
          4 of 6 losses broke your <span className={mark}>no trades after 3 losses</span> rule. Without them the week ends +1.4R.
        </div>
        <div className="max-w-[88%] rounded-xl bg-ink/5 px-3 py-2 leading-[1.45]">
          Suggested tag: <span className={mark}>revenge trade</span>. Confirm?
        </div>
      </div>
    </div>
  );
}

export function SyncPanel() {
  return (
    <div className={mini} aria-hidden="true">
      <div className={head}>System sync <span className={status}>Running</span></div>
      <div className={row}><span className="w-12 shrink-0 tabular-nums text-ink/60">09:15</span><span className="flex-1">Orders → marketplace</span><span className={pill}>Done</span></div>
      <div className={row}><span className="w-12 shrink-0 tabular-nums text-ink/60">09:15</span><span className="flex-1">Campaign data → analytics</span><span className={pill}>Done</span></div>
      <div className={row}><span className="w-12 shrink-0 tabular-nums text-ink/60">09:16</span><span className="flex-1">CRM: 2 records held</span><span className={pillDark}>Flagged</span></div>
      <div className={row}><span className="w-12 shrink-0 tabular-nums text-ink/60">09:16</span><span className="flex-1">Campaign SMS sent</span><span className={pill}>Done</span></div>
    </div>
  );
}

function Meter({ label, width, value, before }: { label: string; width: string; value: string; before?: boolean }) {
  return (
    <div className="grid grid-cols-[5.5rem_1fr_3.2rem] items-center gap-3 border-b border-ink/10 px-4 py-2.5 last:border-b-0">
      <span className="text-ink/60">{label}</span>
      <span className="relative h-1 rounded bg-ink/10">
        <i className={`absolute inset-y-0 left-0 rounded ${before ? "bg-ink/30" : "bg-ink"}`} style={{ width }} />
      </span>
      <span className="text-right tabular-nums">{value}</span>
    </div>
  );
}

export function SpeedPanel() {
  return (
    <div className={mini} aria-hidden="true">
      <div className={head}>Core Web Vitals, mobile <span className={status}>After</span></div>
      <Meter label="LCP before" width="95%" value="3.8 s" before />
      <Meter label="LCP after" width="38%" value="1.5 s" />
      <Meter label="Lighthouse" width="52%" value="52" before />
      <Meter label="Lighthouse" width="86%" value="86" />
    </div>
  );
}
