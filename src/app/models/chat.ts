import { ProfileUser } from './user-profile';

export interface Chat {
  id: string;
  lastMessage?: string;
  lastMessageDate?: Date;
  userIds: string[];
  users: ProfileUser[];

  // Not stored, only for display
  chatPic?: string;
  chatName?: string;
}

export interface Message {
  text: string;
  senderId: string;
  sentDate: Date;
}
