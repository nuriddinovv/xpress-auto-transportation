import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
  Rating,
  Stack,
} from "@mui/material";

export const ReviewCard = () => {
  return (
    <Card sx={{ maxWidth: 380, borderRadius: 3, boxShadow: 3 }}>
      <CardHeader
        avatar={<Avatar src="/avatar.jpg" />}
        title={
          <>
            <Typography fontWeight={600}>Ali Abdulla</Typography>
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
