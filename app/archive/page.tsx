import { CircularOrbit } from '@/components/circular-orbit';
import { archiveItems } from '@/data/archive-items';

export default function ArchivePage() {
  return (
    <main className="shell section-gap page-stack">
      <p className="eyebrow">Содержание номера</p>

      <CircularOrbit items={archiveItems} className="archive-layout" />
    </main>
  );
}
