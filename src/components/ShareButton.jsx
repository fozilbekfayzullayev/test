import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
} from "react-share";
import { Stack } from "@mui/material";
import { Facebook, Telegram, Twitter } from "@mui/icons-material";

const ShareButton = ({ url, title }) => {
  return (
    <Stack direction="row" spacing={2}>
      <FacebookShareButton url={url} quote={title}>
        <Facebook
          sx={{
            fontSize: { xs: 24, md: 36 },
            transition: "color 0.3s ease",
            "&:hover": { color: "rgba(18, 101, 225, 1)" },
          }}
        />
      </FacebookShareButton>

      <TelegramShareButton url={url} title={title}>
        <Telegram
          sx={{
            fontSize: { xs: 24, md: 36 },
            transition: "color 0.3s ease",
            "&:hover": { color: "rgba(18, 101, 225, 1)" },
          }}
        />
      </TelegramShareButton>

      <TwitterShareButton url={url} title={title}>
        <Twitter
          sx={{
            fontSize: { xs: 24, md: 36 },
            transition: "color 0.3s ease",
            "&:hover": { color: "rgba(18, 101, 225, 1)" },
          }}
        />
      </TwitterShareButton>
    </Stack>
  );
};

export default ShareButton;
