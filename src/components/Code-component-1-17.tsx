import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowLeft, Users, MessageSquare, BookOpen, Calendar, Globe, Eye, Palette, MapPin, Shirt, ShoppingBag, Mic } from 'lucide-react';

export interface SceneEntity {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  details: {
    info: string;
    actions: Array<{
      type: 'learn' | 'buy' | 'book' | 'join';
      label: string;
      description: string;
    }>;
  };
}

const sceneEntities: SceneEntity[] = [
  {
    id: 'actors',
    title: 'Actors/Crew',
    icon: <Users className="w-5 h-5" />,
    description: 'Cast and crew information',
    details: {
      info: 'Main cast includes Emma Stone, Ryan Gosling, and director Damien Chazelle. This scene features improvised dialogue between the leads.',
      actions: [
        { type: 'learn', label: 'Actor Filmography', description: 'Explore other movies featuring these actors' },
        { type: 'join', label: 'Fan Communities', description: 'Join discussions about the cast' }
      ]
    }
  },
  {
    id: 'dialogue',
    title: 'Dialogues',
    icon: <MessageSquare className="w-5 h-5" />,
    description: 'Script and conversation analysis',
    details: {
      info: 'This dialogue explores themes of dreams vs. reality, with subtle references to classic Hollywood musicals.',
      actions: [
        { type: 'learn', label: 'Script Analysis', description: 'Deep dive into the screenplay' },
        { type: 'learn', label: 'Behind the Scenes', description: 'How this scene was written and performed' }
      ]
    }
  },
  {
    id: 'plot',
    title: 'Plot',
    icon: <BookOpen className="w-5 h-5" />,
    description: 'Story context and narrative',
    details: {
      info: 'This pivotal scene marks the turning point where both characters must choose between love and ambition.',
      actions: [
        { type: 'learn', label: 'Plot Summary', description: 'Complete story breakdown' },
        { type: 'learn', label: 'Similar Stories', description: 'Movies with comparable narratives' }
      ]
    }
  },
  {
    id: 'genre',
    title: 'Similar Genres',
    icon: <Globe className="w-5 h-5" />,
    description: 'Related films and recommendations',
    details: {
      info: 'Musical romance drama with contemporary LA setting. Similar to "Singin\' in the Rain" and "Casablanca".',
      actions: [
        { type: 'learn', label: 'Genre Guide', description: 'Explore musical romance films' },
        { type: 'learn', label: 'Recommendations', description: 'Movies you might also enjoy' }
      ]
    }
  },
  {
    id: 'timeperiod',
    title: 'Time Period',
    icon: <Calendar className="w-5 h-5" />,
    description: 'Historical and cultural context',
    details: {
      info: 'Set in contemporary Los Angeles with nostalgic references to 1950s Hollywood glamour.',
      actions: [
        { type: 'learn', label: 'Historical Context', description: 'LA entertainment industry evolution' },
        { type: 'learn', label: 'Cultural Impact', description: 'How this era influenced the film' }
      ]
    }
  },
  {
    id: 'location',
    title: 'Location',
    icon: <MapPin className="w-5 h-5" />,
    description: 'Filming locations and settings',
    details: {
      info: 'Filmed at Griffith Observatory, Los Angeles. This iconic location has appeared in numerous Hollywood films.',
      actions: [
        { type: 'book', label: 'Visit Location', description: 'Plan a trip to Griffith Observatory' },
        { type: 'learn', label: 'Location History', description: 'Stories behind this famous landmark' }
      ]
    }
  },
  {
    id: 'costumes',
    title: 'Costumes',
    icon: <Shirt className="w-5 h-5" />,
    description: 'Fashion and costume design',
    details: {
      info: 'Vintage-inspired wardrobe designed by Mary Zophres, featuring 1950s silhouettes with modern fabrics.',
      actions: [
        { type: 'buy', label: 'Shop Similar Styles', description: 'Find vintage-inspired clothing' },
        { type: 'learn', label: 'Costume Design', description: 'Behind the wardrobe choices' }
      ]
    }
  },
  {
    id: 'products',
    title: 'Products & Services',
    icon: <ShoppingBag className="w-5 h-5" />,
    description: 'Items featured in the scene',
    details: {
      info: 'Vintage-style car, jazz piano, classic cocktails, and period-appropriate accessories are prominently featured.',
      actions: [
        { type: 'buy', label: 'Shop Featured Items', description: 'Purchase similar products' },
        { type: 'learn', label: 'Product History', description: 'Stories behind the featured items' }
      ]
    }
  }
];

interface SceneCompanionProps {
  isVisible: boolean;
  onClose: () => void;
}

export function SceneCompanion({ isVisible, onClose }: SceneCompanionProps) {
  const [selectedEntity, setSelectedEntity] = useState<SceneEntity | null>(null);
  const [isVoiceMode, setIsVoiceMode] = useState(false);

  if (!isVisible) return null;

  const handleEntitySelect = (entity: SceneEntity) => {
    setSelectedEntity(entity);
  };

  const handleBack = () => {
    setSelectedEntity(null);
  };

  const getActionIcon = (type: string) => {
    switch (type) {
      case 'buy': return '🛒';
      case 'book': return '✈️';
      case 'join': return '👥';
      default: return '📖';
    }
  };

  return (
    <div className="absolute inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-4xl max-h-[80vh] overflow-hidden">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            {selectedEntity ? (
              <Button variant="ghost" onClick={handleBack} className="p-2">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Scene Companion
              </Button>
            ) : (
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-6 h-6" />
                Scene Companion
              </CardTitle>
            )}
            <div className="flex gap-2">
              <Button
                variant={isVoiceMode ? "default" : "outline"}
                size="sm"
                onClick={() => setIsVoiceMode(!isVoiceMode)}
                className="flex items-center gap-2"
              >
                <Mic className="w-4 h-4" />
                Voice
              </Button>
              <Button variant="outline" onClick={onClose}>
                Close
              </Button>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="p-6">
          {!selectedEntity ? (
            <div>
              <div className="mb-6">
                <h3 className="mb-2">More about:</h3>
                <p className="text-muted-foreground">
                  Choose what you'd like to learn more about from this scene
                </p>
              </div>
              
              {isVoiceMode && (
                <div className="mb-6 p-4 bg-accent rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Mic className="w-4 h-4 text-primary" />
                    <span>Voice Mode Active</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Say "More about actors" or "Tell me about the location" to get started
                  </p>
                </div>
              )}
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {sceneEntities.map((entity) => (
                  <Button
                    key={entity.id}
                    variant="outline"
                    className="p-4 h-auto flex-col gap-2 hover:border-primary"
                    onClick={() => handleEntitySelect(entity)}
                  >
                    {entity.icon}
                    <span className="text-center">{entity.title}</span>
                  </Button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                {selectedEntity.icon}
                <h3>{selectedEntity.title}</h3>
              </div>
              
              <div>
                <h4 className="mb-3">Information</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedEntity.details.info}
                </p>
              </div>
              
              <div>
                <h4 className="mb-3">Actions & Recommendations</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedEntity.details.actions.map((action, index) => (
                    <Card key={index} className="p-4 hover:bg-accent cursor-pointer transition-colors">
                      <div className="flex items-start gap-3">
                        <span className="text-lg">{getActionIcon(action.type)}</span>
                        <div>
                          <h5 className="mb-1">{action.label}</h5>
                          <p className="text-sm text-muted-foreground">
                            {action.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}