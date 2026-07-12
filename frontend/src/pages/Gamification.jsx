import { Award, Gift, Medal, Sparkles, Trophy, Users } from "lucide-react";
import Card, { CardHeader } from "../components/ui/Card.jsx";
import DataTable from "../components/ui/DataTable.jsx";
import StatusBadge from "../components/ui/StatusBadge.jsx";
import useToast from "../hooks/useToast.js";
import { badges, challengeParticipation, challenges, leaderboard, rewards } from "../data/mockData.js";

function Gamification() {
  const { showToast } = useToast();

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-normal text-emerald-700">Gamification</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-950">Engagement and rewards</h1>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">Motivate ESG participation with challenges, badges, rewards, leaderboards, and team XP tracking.</p>
      </div>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          { label: "Active challenges", value: "8", icon: Trophy },
          { label: "Total XP earned", value: "48.2k", icon: Sparkles },
          { label: "Badges issued", value: "413", icon: Award },
          { label: "Rewards redeemed", value: "72", icon: Gift },
        ].map((card) => {
          const Icon = card.icon;
          return (
            <Card key={card.label} className="p-5">
              <Icon className="text-emerald-600" size={24} aria-hidden="true" />
              <p className="mt-4 text-sm text-slate-500">{card.label}</p>
              <p className="mt-2 text-3xl font-semibold text-slate-950">{card.value}</p>
            </Card>
          );
        })}
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]">
        <Card>
          <CardHeader title="Challenges" description="Live and upcoming enterprise ESG challenges" />
          <div className="grid gap-4 p-5 lg:grid-cols-3">
            {challenges.map((challenge) => (
              <div key={challenge.id} className="rounded-md border border-slate-200 p-4">
                <div className="flex justify-between gap-3">
                  <Trophy size={20} className="text-emerald-600" aria-hidden="true" />
                  <StatusBadge tone={challenge.status === "Live" ? "emerald" : "blue"}>{challenge.status}</StatusBadge>
                </div>
                <h2 className="mt-4 text-sm font-semibold leading-6 text-slate-950">{challenge.title}</h2>
                <p className="mt-3 text-sm text-slate-500">{challenge.participants} participants</p>
                <p className="mt-1 text-sm font-semibold text-emerald-700">{challenge.points} XP</p>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <CardHeader title="Leaderboard" description="Top ESG contributors" />
          <div className="space-y-3 p-5">
            {leaderboard.map((person, index) => (
              <div key={person.id} className="flex items-center gap-3 rounded-md border border-slate-200 p-3">
                <div className="flex size-9 items-center justify-center rounded-md bg-emerald-50 text-sm font-semibold text-emerald-700">#{index + 1}</div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-slate-950">{person.employee}</p>
                  <p className="text-xs text-slate-500">{person.department}</p>
                </div>
                <p className="text-sm font-semibold text-slate-950">{person.xp} XP</p>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section className="grid gap-6 xl:grid-cols-3">
        <DataTable
          title="Challenge Participation"
          data={challengeParticipation}
          searchFields={["team", "challenge"]}
          columns={[
            { key: "team", header: "Team" },
            { key: "challenge", header: "Challenge" },
            { key: "progress", header: "Progress" },
            { key: "rank", header: "Rank" },
          ]}
        />
        <Card>
          <CardHeader title="Badges" description="Recognition earned by employees" />
          <div className="space-y-3 p-5">
            {badges.map((badge) => (
              <div key={badge.id} className="flex items-center gap-3 rounded-md border border-slate-200 p-4">
                <Medal size={20} className="text-emerald-600" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-slate-950">{badge.name}</p>
                  <p className="text-sm text-slate-500">{badge.holders} holders</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <CardHeader title="Rewards" description="UI-only redemption catalog" />
          <div className="space-y-3 p-5">
            {rewards.map((reward) => (
              <button
                key={reward.id}
                type="button"
                onClick={() => showToast(`${reward.name} selected`)}
                className="flex w-full items-center gap-3 rounded-md border border-slate-200 p-4 text-left transition hover:border-emerald-200 hover:bg-emerald-50"
              >
                <Users size={20} className="text-emerald-600" aria-hidden="true" />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-slate-950">{reward.name}</p>
                  <p className="text-sm text-slate-500">{reward.cost} · {reward.stock} left</p>
                </div>
              </button>
            ))}
          </div>
        </Card>
      </section>
    </div>
  );
}

export default Gamification;
