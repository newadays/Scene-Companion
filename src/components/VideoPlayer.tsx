import React, { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';
import { Button } from './ui/button';

interface VideoPlayerProps {
  onPause: () => void;
  onPlay: () => void;
  isPaused: boolean;
}

export function VideoPlayer({ onPause, onPlay, isPaused }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPaused) {
        videoRef.current.play();
        onPlay();
      } else {
        videoRef.current.pause();
        onPause();
      }
    }
  };

  return (
    <div className="relative w-full h-full bg-black rounded-lg overflow-hidden">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1563202221-f4eae97e4828?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHNjZW5lJTIwY2luZW1hdGljfGVufDF8fHx8MTc1NzUzNzQ5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        onPause={onPause}
        onPlay={onPlay}
      >
        {/* Mock video source - in real app would be actual video */}
        <source src="#" type="video/mp4" />
      </video>
      
      {/* Custom play/pause overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
        <Button
          variant="ghost"
          size="icon"
          className="w-16 h-16 rounded-full bg-black/50 hover:bg-black/70 text-white"
          onClick={handlePlayPause}
        >
          {isPaused ? <Play className="w-8 h-8 ml-1" /> : <Pause className="w-8 h-8" />}
        </Button>
      </div>
      
      {/* Video controls bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20"
            onClick={handlePlayPause}
          >
            {isPaused ? <Play className="w-5 h-5 ml-0.5" /> : <Pause className="w-5 h-5" />}
          </Button>
          
          {/* Mock progress bar */}
          <div className="flex-1 h-1 bg-white/30 rounded-full">
            <div className="w-1/3 h-full bg-white rounded-full"></div>
          </div>
          
          <span className="text-white text-sm">12:34 / 45:67</span>
        </div>
      </div>
    </div>
  );
}