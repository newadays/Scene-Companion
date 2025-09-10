import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowLeft, Users, MessageSquare, BookOpen, Calendar, Globe, Eye, Palette, MapPin, Shirt, ShoppingBag, Mic, GraduationCap, Sparkles, ShoppingCart, Navigation, MessageCircle, FileText, Scale, Star } from 'lucide-react';

export interface SceneAction {
  type: 'learn' | 'recommendations' | 'buy' | 'visit' | 'discuss';
  label: string;
  description: string;
  icon: React.ReactNode;
  items: Array<{
    title: string;
    description: string;
    url?: string;
  }>;
}

export interface SceneEntity {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  details: {
    info: string;
    actions: SceneAction[];
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
        {
          type: 'learn',
          label: 'Learn More',
          description: 'Deep dive into cast and crew details',
          icon: <GraduationCap className="w-5 h-5" />,
          items: [
            { title: 'Emma Stone Biography', description: 'Career highlights and filmography' },
            { title: 'Ryan Gosling Method', description: 'Acting techniques and preparation' },
            { title: 'Damien Chazelle Vision', description: 'Director\'s approach to this scene' }
          ]
        },
        {
          type: 'recommendations',
          label: 'Recommendations',
          description: 'Similar performances and collaborations',
          icon: <Sparkles className="w-5 h-5" />,
          items: [
            { title: 'Whiplash (2014)', description: 'Previous Chazelle-Gosling collaboration' },
            { title: 'Easy A (2010)', description: 'Emma Stone breakthrough performance' },
            { title: 'First Man (2018)', description: 'Another Chazelle musical drama' }
          ]
        },
        {
          type: 'discuss',
          label: 'Discuss',
          description: 'Join fan communities and discussions',
          icon: <MessageCircle className="w-5 h-5" />,
          items: [
            { title: 'r/LaLaLand Community', description: 'Reddit discussions about the film' },
            { title: 'Film Twitter #LaLaLand', description: 'Real-time conversations' },
            { title: 'IMDb User Reviews', description: 'Read and share your thoughts' }
          ]
        }
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
        {
          type: 'learn',
          label: 'Learn More',
          description: 'Analyze the screenplay and dialogue',
          icon: <GraduationCap className="w-5 h-5" />,
          items: [
            { title: 'Script Analysis', description: 'Line-by-line breakdown of this scene' },
            { title: 'Improvisation Elements', description: 'What was scripted vs. improvised' },
            { title: 'Musical References', description: 'Classical Hollywood callbacks' }
          ]
        },
        {
          type: 'recommendations',
          label: 'Recommendations',
          description: 'Films with similar dialogue styles',
          icon: <Sparkles className="w-5 h-5" />,
          items: [
            { title: 'Casablanca (1942)', description: 'Classic romantic dialogue' },
            { title: 'Annie Hall (1977)', description: 'Natural, conversational style' },
            { title: 'Before Sunset (2004)', description: 'Character-driven dialogue' }
          ]
        },
        {
          type: 'discuss',
          label: 'Discuss',
          description: 'Debate themes and interpretations',
          icon: <MessageCircle className="w-5 h-5" />,
          items: [
            { title: 'Screenplay Analysis Forum', description: 'Discuss writing techniques' },
            { title: 'Film Studies Groups', description: 'Academic discussions' },
            { title: 'Quote Collections', description: 'Share favorite lines' }
          ]
        }
      ]
    }
  },
  {
    id: 'plot',
    title: 'Plot',
    icon: <FileText className="w-5 h-5" />,
    description: 'Story structure and narrative analysis',
    details: {
      info: 'This pivotal scene represents the climactic moment where both characters must choose between love and ambition. The narrative structure follows classic three-act storytelling with musical interludes that advance the plot.',
      actions: [
        {
          type: 'learn',
          label: 'Learn More',
          description: 'Deep dive into story structure and narrative',
          icon: <GraduationCap className="w-5 h-5" />,
          items: [
            { title: 'Three-Act Structure', description: 'How this scene fits the classic narrative arc' },
            { title: 'Character Development', description: 'Journey of the protagonists to this moment' },
            { title: 'Plot Devices', description: 'Techniques used to advance the story' }
          ]
        },
        {
          type: 'recommendations',
          label: 'Recommendations',
          description: 'Films with similar narrative structures',
          icon: <Sparkles className="w-5 h-5" />,
          items: [
            { title: 'Whiplash (2014)', description: 'Another Chazelle exploration of ambition vs. love' },
            { title: 'A Star is Born (2018)', description: 'Musical drama with similar themes' },
            { title: 'The Artist (2011)', description: 'Silent film homage with parallel structure' }
          ]
        },
        {
          type: 'discuss',
          label: 'Discuss',
          description: 'Analyze plot themes and narrative choices',
          icon: <MessageCircle className="w-5 h-5" />,
          items: [
            { title: 'Plot Analysis Groups', description: 'Discuss narrative structure and pacing' },
            { title: 'Screenwriting Communities', description: 'Learn from this script\'s structure' },
            { title: 'Film Theory Forums', description: 'Academic discussion of narrative techniques' }
          ]
        }
      ]
    }
  },
  {
    id: 'social-issues',
    title: 'Social Issues',
    icon: <Scale className="w-5 h-5" />,
    description: 'Cultural and societal themes',
    details: {
      info: 'The film explores themes of artistic integrity vs. commercial success, gender dynamics in creative industries, and the gentrification of Los Angeles. This scene particularly highlights the tension between personal dreams and economic reality.',
      actions: [
        {
          type: 'learn',
          label: 'Learn More',
          description: 'Explore the social commentary and themes',
          icon: <GraduationCap className="w-5 h-5" />,
          items: [
            { title: 'Artistic Integrity vs Commerce', description: 'The central conflict of creative careers' },
            { title: 'Gender in Hollywood', description: 'How the film addresses industry gender dynamics' },
            { title: 'LA Gentrification', description: 'Urban development themes in the narrative' }
          ]
        },
        {
          type: 'recommendations',
          label: 'Recommendations',
          description: 'Films addressing similar social themes',
          icon: <Sparkles className="w-5 h-5" />,
          items: [
            { title: 'Sunset Boulevard (1950)', description: 'Classic Hollywood industry critique' },
            { title: 'Mulholland Drive (2001)', description: 'Dark take on LA dreams and reality' },
            { title: 'Birdman (2014)', description: 'Artistic integrity vs. commercial success' }
          ]
        },
        {
          type: 'discuss',
          label: 'Discuss',
          description: 'Join conversations about social themes',
          icon: <MessageCircle className="w-5 h-5" />,
          items: [
            { title: 'Social Justice Cinema Groups', description: 'Discuss films with social commentary' },
            { title: 'Industry Reform Discussions', description: 'Talk about Hollywood\'s evolution' },
            { title: 'Urban Studies Forums', description: 'LA development and cultural impact' }
          ]
        }
      ]
    }
  },
  {
    id: 'symbolism',
    title: 'Symbolism',
    icon: <Star className="w-5 h-5" />,
    description: 'Visual metaphors and symbolic meaning',
    details: {
      info: 'Rich symbolism throughout this scene includes the contrast between warm and cool lighting representing emotional states, the recurring star motifs symbolizing dreams and aspiration, and the physical elevation of the observatory representing both literal and metaphorical heights.',
      actions: [
        {
          type: 'learn',
          label: 'Learn More',
          description: 'Decode visual metaphors and symbols',
          icon: <GraduationCap className="w-5 h-5" />,
          items: [
            { title: 'Color Symbolism', description: 'How color palettes convey emotion and meaning' },
            { title: 'Star Imagery', description: 'Dreams, aspirations, and celestial metaphors' },
            { title: 'Spatial Symbolism', description: 'How physical space reflects emotional distance' }
          ]
        },
        {
          type: 'recommendations',
          label: 'Recommendations',
          description: 'Films with rich symbolic content',
          icon: <Sparkles className="w-5 h-5" />,
          items: [
            { title: 'Vertigo (1958)', description: 'Hitchcock\'s masterclass in visual symbolism' },
            { title: '2001: A Space Odyssey (1968)', description: 'Kubrick\'s symbolic space epic' },
            { title: 'Her (2013)', description: 'Modern symbolism in technology and relationships' }
          ]
        },
        {
          type: 'discuss',
          label: 'Discuss',
          description: 'Interpret symbols and metaphors with others',
          icon: <MessageCircle className="w-5 h-5" />,
          items: [
            { title: 'Film Symbolism Groups', description: 'Analyze visual metaphors with film students' },
            { title: 'Art Theory Discussions', description: 'Explore symbolic meaning in cinema' },
            { title: 'Visual Storytelling Forums', description: 'How images convey narrative meaning' }
          ]
        }
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
        {
          type: 'learn',
          label: 'Learn More',
          description: 'History and significance of the location',
          icon: <GraduationCap className="w-5 h-5" />,
          items: [
            { title: 'Observatory History', description: 'Built in 1935, public astronomy facility' },
            { title: 'Film History', description: 'Featured in Rebel Without a Cause, Transformers' },
            { title: 'Architecture', description: 'Art Deco design and significance' }
          ]
        },
        {
          type: 'visit',
          label: 'Visit',
          description: 'Plan your trip to this iconic location',
          icon: <Navigation className="w-5 h-5" />,
          items: [
            { title: 'Visit Griffith Observatory', description: 'Free admission, hours, and directions' },
            { title: 'Hollywood Tours', description: 'Movie location tours including this spot' },
            { title: 'LA Travel Guide', description: 'Complete Los Angeles itinerary' }
          ]
        },
        {
          type: 'recommendations',
          label: 'Recommendations',
          description: 'Other iconic filming locations',
          icon: <Sparkles className="w-5 h-5" />,
          items: [
            { title: 'Angels Flight Railway', description: 'Another La La Land location' },
            { title: 'Hollywood Bowl', description: 'Classic LA entertainment venue' },
            { title: 'Grand Central Market', description: 'Historic downtown location' }
          ]
        }
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
        {
          type: 'learn',
          label: 'Learn More',
          description: 'Costume design process and inspiration',
          icon: <GraduationCap className="w-5 h-5" />,
          items: [
            { title: 'Mary Zophres Interview', description: 'Designer discusses her approach' },
            { title: '1950s Fashion History', description: 'Era that inspired the looks' },
            { title: 'Color Psychology', description: 'How costume colors tell the story' }
          ]
        },
        {
          type: 'buy',
          label: 'Buy',
          description: 'Shop similar vintage-inspired styles',
          icon: <ShoppingCart className="w-5 h-5" />,
          items: [
            { title: 'Vintage Yellow Dress', description: 'Emma Stone\'s iconic look' },
            { title: '1950s Style Suits', description: 'Ryan Gosling\'s wardrobe style' },
            { title: 'Vintage Accessories', description: 'Complete the period look' }
          ]
        },
        {
          type: 'recommendations',
          label: 'Recommendations',
          description: 'Films with outstanding costume design',
          icon: <Sparkles className="w-5 h-5" />,
          items: [
            { title: 'The Grand Budapest Hotel', description: 'Milena Canonero\'s designs' },
            { title: 'Mad Men TV Series', description: '1960s fashion perfection' },
            { title: 'Phantom Thread', description: 'Mark Bridges\' couture costumes' }
          ]
        }
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
        {
          type: 'buy',
          label: 'Buy',
          description: 'Purchase featured items and similar products',
          icon: <ShoppingCart className="w-5 h-5" />,
          items: [
            { title: 'Vintage Piano', description: 'Restored 1950s jazz piano' },
            { title: 'Classic Car Rentals', description: 'Experience vintage automobile style' },
            { title: 'Cocktail Recipe Book', description: 'Make drinks from the era' }
          ]
        },
        {
          type: 'learn',
          label: 'Learn More',
          description: 'History and significance of featured items',
          icon: <GraduationCap className="w-5 h-5" />,
          items: [
            { title: 'Jazz Piano History', description: 'Evolution of jazz piano styles' },
            { title: 'Classic Car Culture', description: '1950s automotive design' },
            { title: 'Cocktail Culture', description: 'Golden age of mixology' }
          ]
        },
        {
          type: 'recommendations',
          label: 'Recommendations',
          description: 'Related products and experiences',
          icon: <Sparkles className="w-5 h-5" />,
          items: [
            { title: 'Jazz Music Playlists', description: 'Songs that inspired the film' },
            { title: 'Classic Car Shows', description: 'Events and exhibitions' },
            { title: 'Vintage Lifestyle Brands', description: 'Authentic period products' }
          ]
        }
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
  const [selectedAction, setSelectedAction] = useState<SceneAction | null>(null);
  const [isVoiceMode, setIsVoiceMode] = useState(false);

  if (!isVisible) return null;

  const handleEntitySelect = (entity: SceneEntity) => {
    setSelectedEntity(entity);
    setSelectedAction(null);
  };

  const handleActionSelect = (action: SceneAction) => {
    setSelectedAction(action);
  };

  const handleBack = () => {
    if (selectedAction) {
      setSelectedAction(null);
    } else {
      setSelectedEntity(null);
    }
  };

  return (
    <div className="absolute inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-4xl max-h-[80vh] overflow-hidden">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            {selectedEntity || selectedAction ? (
              <Button variant="ghost" onClick={handleBack} className="p-2">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {selectedAction ? `Back to ${selectedEntity?.title}` : 'Back to Scene Companion'}
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
          ) : selectedAction ? (
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                {selectedAction.icon}
                <h3>{selectedAction.label}</h3>
                <Badge variant="secondary">{selectedEntity.title}</Badge>
              </div>
              
              <div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {selectedAction.description}
                </p>
              </div>
              
              <div>
                <h4 className="mb-4">Available Options</h4>
                <div className="space-y-3">
                  {selectedAction.items.map((item, index) => (
                    <Card key={index} className="p-4 hover:bg-accent cursor-pointer transition-colors border-l-4 border-l-primary">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h5 className="mb-2">{item.title}</h5>
                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                        <Button size="sm" variant="ghost" className="ml-4">
                          {selectedAction.type === 'buy' ? 'Shop' :
                           selectedAction.type === 'visit' ? 'Book' :
                           selectedAction.type === 'discuss' ? 'Join' : 'Explore'}
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
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
                <h4 className="mb-4">Next Best Actions</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  What would you like to do next?
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedEntity.details.actions.map((action, index) => (
                    <Card 
                      key={index} 
                      className="p-4 hover:bg-accent cursor-pointer transition-colors hover:border-primary group"
                      onClick={() => handleActionSelect(action)}
                    >
                      <div className="flex flex-col items-center text-center gap-3">
                        <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          {action.icon}
                        </div>
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