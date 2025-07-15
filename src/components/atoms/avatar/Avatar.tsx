import React from 'react';
import styles from './Avatar.module.css';

export interface AvatarProps {
  name: string;
}

const getAvatarColor = (name?: string) => {
  if (!name) return '#FFC107';
  const colors = ['#FFC107', '#03A9F4', '#4CAF50', '#E91E63', '#FF5722'];
  const index = name.charCodeAt(0) % colors.length;
  return colors[index];
};

const Avatar: React.FC<AvatarProps> = ({ name }) => {
  const nameParts = name.split(' ');
  const initials =
    nameParts.length > 1 ? nameParts[0][0] + nameParts[1][0] : nameParts[0][0];
  return (
    <span
      style={{ backgroundColor: getAvatarColor(initials) }}
      className={styles.container}
    >
      {initials}
    </span>
  );
};
export default Avatar;
