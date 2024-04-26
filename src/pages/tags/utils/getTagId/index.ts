export const getTagId = ({
  userId,
  tagLabel,
}: {
  userId: string
  tagLabel: string
}): string => {
  return ''.concat(userId, '|', tagLabel)
}
