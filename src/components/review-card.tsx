import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
  Rating,
  Stack,
} from "@mui/material";

import avatarcomm from "/avatarcomm.svg";

export const ReviewCard = () => {
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 380,
        borderRadius: 3,
        boxShadow: "0px 3px 15px rgba(0,0,0,0.05)",
      }}
    >
      <CardHeader
        avatar={<Avatar src={avatarcomm} />}
        title={
          <>
            <Typography fontWeight={600} color="text.primary">
              Ali Abdulla
            </Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <Rating value={5} readOnly size="small" />
              <Typography variant="caption" color="text.secondary">
                25 weeks ago
              </Typography>
            </Stack>
          </>
        }
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          DUBAI RENT S CAR is the best, huge thanks for the awesome service I
          got on my recent rental...
        </Typography>
      </CardContent>
    </Card>
  );
};
