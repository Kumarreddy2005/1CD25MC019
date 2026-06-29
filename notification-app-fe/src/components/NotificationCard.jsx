import { Card, CardContent, Typography, Chip } from "@mui/material";

export function NotificationCard({ notification }) {
  return (
    <Card>
      <CardContent>
        <Chip
          label={notification.Type}
          size="small"
          sx={{ mb: 1 }}
        />

        <Typography variant="body1">
          {notification.Message}
        </Typography>

        <Typography variant="caption">
          {notification.Timestamp}
        </Typography>
      </CardContent>
    </Card>
  );
}