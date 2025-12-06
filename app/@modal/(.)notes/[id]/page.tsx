import ModalOverlay from '@/components/Modal/ModalOverlay';
import NoteDetailsClient from '@/app/notes/[id]/NoteDetails.client';

export default function NotePreview() {
  return (
    <ModalOverlay>
      <NoteDetailsClient />
    </ModalOverlay>
  );
}
