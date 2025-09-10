import React, { useState } from 'react';
import { VideoPlayer } from './components/VideoPlayer';
import { SceneCompanion } from './components/SceneCompanion';

export default function App() {
  const [isPaused, setIsPaused] = useState(false);
  const [showSceneCompanion, setShowSceneCompanion] = useState(false);

  const handlePause = () => {
    setIsPaused(true);
    setShowSceneCompanion(true);
  };

  const handlePlay = () => {
    setIsPaused(false);
    setShowSceneCompanion(false);
  };

  const handleCloseCompanion = () => {
    setShowSceneCompanion(false);
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-6xl mx-auto">
        <header className="mb-6">
          <h1 className="mb-2">Scene Companion</h1>
          <p className="text-muted-foreground">
            Pause the video to explore scene elements and get contextual information
          </p>
        </header>
        
        <div className="relative">
          <div className="aspect-video bg-black rounded-lg overflow-hidden">
            <VideoPlayer
              onPause={handlePause}
              onPlay={handlePlay}
              isPaused={isPaused}
            />
          </div>
          
          <SceneCompanion
            isVisible={showSceneCompanion}
            onClose={handleCloseCompanion}
          />
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Click the pause button or press spacebar to access Scene Companion features
          </p>
        </div>
      </div>
    </div>
  );
}