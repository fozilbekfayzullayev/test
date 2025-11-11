import { Share } from "@mui/icons-material";
import { IconButton } from "@mui/material";
<<<<<<< HEAD
import { useState } from "react";
=======
import React, { useState } from "react";
>>>>>>> aee9e95e20a917aa26afc0a478ce61fac2f08d6f
import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

const ShareMenu = () => {
  const [open, setOpen] = useState(false);
  const shareUrl = window.location.href;
  const title = document.title;

  const handleNativeShare = async () => {
    const data = { title, text: "Check this out!", url: shareUrl };
    if (navigator.share) {
      try {
        await navigator.share(data);
      } catch (err) {
        console.error("Share canceled or failed:", err);
      }
    } else {
      setOpen(!open); // Agar brauzer qo‘llamasa, ijtimoiy tarmoqlar chiqsin
    }
  };

  return (
    <div className="relative inline-block">
      <IconButton
        onClick={handleNativeShare}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
      >
        <Share />
      </IconButton>

      {open && (
        <div className="absolute mt-2 flex gap-2 bg-white border shadow-md rounded-xl p-2">
          <FacebookShareButton url={shareUrl} quote={title}>
            <FacebookIcon size={40} round />
          </FacebookShareButton>

          <TelegramShareButton url={shareUrl} title={title}>
            <TelegramIcon size={40} round />
          </TelegramShareButton>

          <TwitterShareButton url={shareUrl} title={title}>
            <TwitterIcon size={40} round />
          </TwitterShareButton>

          <WhatsappShareButton url={shareUrl} title={title}>
            <WhatsappIcon size={40} round />
          </WhatsappShareButton>
        </div>
      )}
    </div>
  );
};

export default ShareMenu;
