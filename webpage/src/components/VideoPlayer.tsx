 
import { X } from "lucide-react";
import { Button } from "./ui/button";

interface VideoPlayerProps {
  videoUrl: string;
  onClose: () => void;
}

const VideoPlayer = ({ videoUrl, onClose }: VideoPlayerProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div className="relative w-full max-w-4xl rounded-lg overflow-hidden shadow-2xl">
        <video src={videoUrl} controls autoPlay className="w-full h-auto" />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 rounded-full bg-black/50 text-white hover:bg-black/75"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};

export default VideoPlayer; 