enum RoomStatus {
    Joined = "JOINED",
    Left = "LEFT",
    Pending = "PENDING",
}

interface ParticipantData {
    [id: string]: RoomStatus;
}

const participants: ParticipantData = {
    index1: RoomStatus.Joined,
    index2: RoomStatus.Left,
    index3: RoomStatus.Pending,
};