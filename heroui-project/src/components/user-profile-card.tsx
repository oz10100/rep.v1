import React from "react";
import { Card, CardBody, Avatar, Button, Badge } from "@heroui/react";
import { Icon } from "@iconify/react";

interface UserProfileCardProps {
  name: string;
  username: string;
  avatar: string;
  bio: string;
  followers: number;
  following: number;
}

export const UserProfileCard: React.FC<UserProfileCardProps> = ({
  name,
  username,
  avatar,
  bio,
  followers,
  following,
}) => {
  const [isFollowing, setIsFollowing] = React.useState(false);

  const handleFollowToggle = () => {
    setIsFollowing((prev) => !prev);
  };

  return (
    <Card className="max-w-md w-full">
      <CardBody className="overflow-hidden">
        <div className="relative h-32 -mx-6 -mt-6 mb-4">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400" />
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent dark:from-content1" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-shrink-0 -mt-16 sm:-mt-12 z-10 mx-auto sm:mx-0">
            <Badge
              content={<Icon icon="lucide:check" className="text-white w-3 h-3" />}
              color="primary"
              placement="bottom-right"
              isInvisible={!isFollowing}
            >
              <Avatar
                src={avatar}
                className="w-24 h-24 text-large border-4 border-white dark:border-content1"
              />
            </Badge>
          </div>

          <div className="flex-grow text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h2 className="text-xl font-bold">{name}</h2>
                <p className="text-default-500 text-sm">{username}</p>
              </div>
              <Button
                color={isFollowing ? "default" : "primary"}
                variant={isFollowing ? "flat" : "solid"}
                onPress={handleFollowToggle}
                className="transition-all duration-300 mx-auto sm:mx-0"
                startContent={
                  <Icon
                    icon={isFollowing ? "lucide:user-check" : "lucide:user-plus"}
                    className="w-4 h-4"
                  />
                }
              >
                {isFollowing ? "Following" : "Follow"}
              </Button>
            </div>

            <p className="mt-3 text-sm">{bio}</p>

            <div className="flex justify-center sm:justify-start gap-6 mt-4">
              <div className="flex flex-col items-center sm:items-start">
                <span className="font-bold">{followers.toLocaleString()}</span>
                <span className="text-default-500 text-xs">Followers</span>
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <span className="font-bold">{following.toLocaleString()}</span>
                <span className="text-default-500 text-xs">Following</span>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};