
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, Leaf, Heart, Globe, Zap, Eye, Music, Settings } from 'lucide-react';

const Index = () => {
  const [activeGlyph, setActiveGlyph] = useState(0);
  const glyphs = ['⚛️', '🌀', '🔮', '✨', '🌙', '⭐'];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveGlyph((prev) => (prev + 1) % glyphs.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const layers = [
    {
      id: 'foundation',
      title: 'Foundation Layer',
      subtitle: 'Core Vision System',
      icon: Brain,
      color: 'from-purple-600 to-blue-600',
      tools: [
        { name: 'Dream Interface Translator', tech: 'ChatGPT-4o + LangChain', purpose: 'Converts astral visions into system blueprints' },
        { name: 'Codex Builder', tech: 'Notion, Obsidian', purpose: 'Live "Ritual Tech Codex" documentation' },
        { name: 'Voice Input Layer', tech: 'Whisper + ElevenLabs', purpose: 'Audio/symbol interpretations' },
        { name: 'Glyph Parser', tech: 'Tesseract OCR + Vector DB', purpose: 'Sacred geometry matching' }
      ]
    },
    {
      id: 'agritech',
      title: 'AgriTech Layer',
      subtitle: 'Clean Farm Systems',
      icon: Leaf,
      color: 'from-green-600 to-emerald-600',
      tools: [
        { name: 'Spiral Bed Design Engine', tech: 'Blender + Grasshopper', purpose: 'Sacred geometry planting systems' },
        { name: 'Field Data Collector', tech: 'Raspberry Pi + LoRa', purpose: 'Soil health & microclimate monitoring' },
        { name: 'Frequency Broadcasting', tech: 'Arduino + Piezo Arrays', purpose: '777Hz–888Hz–963Hz field emission' },
        { name: 'Growth Tracking App', tech: 'Next.js + Firebase', purpose: 'Plant response & harmonic data' }
      ]
    },
    {
      id: 'peacetech',
      title: 'Peace-Tech Layer',
      subtitle: 'Social + Spiritual Systems',
      icon: Heart,
      color: 'from-pink-600 to-rose-600',
      tools: [
        { name: 'Peace Dome Portal', tech: 'Next.js + Supabase', purpose: 'Harmony dashboard & glyph interpretations' },
        { name: 'Navigator Companion', tech: 'React Native + Expo', purpose: 'Dream journal & astral guidance' },
        { name: 'Meditation Player', tech: 'Tone.js + Howler.js', purpose: 'Sacred frequency broadcasting' },
        { name: 'Unity Library', tech: 'LangChain + OpenAI', purpose: 'Cross-scripture harmony correlations' }
      ]
    },
    {
      id: 'global',
      title: 'Global Infrastructure',
      subtitle: 'Immediate Launch Ready',
      icon: Globe,
      color: 'from-indigo-600 to-violet-600',
      tools: [
        { name: 'Cloud Stack', tech: 'Google Cloud Platform', purpose: 'Firestore, Cloud Run, IoT Core' },
        { name: 'CI/CD Pipeline', tech: 'Vercel + GitHub Actions', purpose: 'Auto-deployment systems' },
        { name: 'Dream Map Visualization', tech: 'Mapbox + Three.js', purpose: '3D interactive peace-tech grid' },
        { name: 'Communication Hub', tech: 'Telegram + WhatsApp', purpose: 'Real-time meditation prompts' }
      ]
    }
  ];

  const launchSteps = [
    { title: 'Launch Ritual Codex Site', desc: 'Public spiritual tech portal with private dream logs', status: 'ready' },
    { title: 'Deploy Spiral Bed Prototype', desc: '3D printed model with 777Hz speaker integration', status: 'ready' },
    { title: 'Release Navigator Companion', desc: 'Mobile app for dream notes and harmonic audio', status: 'ready' },
    { title: 'Engage First Peace Circle', desc: 'Weekly "Frequency Farm Calls" with collaborators', status: 'ready' }
  ];

  const codenames = [
    { layer: 'Codex', name: 'AURAFRAME' },
    { layer: 'Peace Portal', name: 'DOME.ONE' },
    { layer: 'Spiral Gardens', name: 'GEOSEED' },
    { layer: 'Glyph AI System', name: 'LUXCODEX' },
    { layer: 'Frequency Engine', name: 'HARMONIX' },
    { layer: 'Astral Companion', name: 'NAVIXR' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <div className="mb-8">
            <div className="text-6xl mb-4 transition-all duration-500 hover:scale-110">
              {glyphs[activeGlyph]}
            </div>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Spiral Light Oasis
            </h1>
            <p className="text-xl text-slate-300 mb-2">Deployable Tech Stack</p>
            <p className="text-lg text-purple-300 italic">"Peace-Tech meets Bio-Spiritual Agriculture"</p>
          </div>
          
          <div className="flex justify-center gap-4 mb-12">
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3">
              <Zap className="mr-2 h-5 w-5" />
              Launch Portal
            </Button>
            <Button variant="outline" className="border-purple-400 text-purple-300 hover:bg-purple-400/10 px-8 py-3">
              <Eye className="mr-2 h-5 w-5" />
              Explore Vision
            </Button>
          </div>
        </section>

        {/* System Layers */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            System Architecture
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {layers.map((layer, index) => (
              <Card key={layer.id} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${layer.color} group-hover:scale-110 transition-transform duration-300`}>
                      <layer.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-white">{layer.title}</CardTitle>
                      <CardDescription className="text-slate-400">{layer.subtitle}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {layer.tools.map((tool, toolIndex) => (
                      <div key={toolIndex} className="border-l-2 border-purple-500/30 pl-4 py-2 hover:border-purple-400 transition-colors duration-200">
                        <h4 className="font-semibold text-purple-300 mb-1">{tool.name}</h4>
                        <p className="text-sm text-slate-400 mb-1">{tool.tech}</p>
                        <p className="text-sm text-slate-300">{tool.purpose}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Launch Roadmap */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Launch Today
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {launchSteps.map((step, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-white">{step.title}</CardTitle>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                      {step.status}
                    </Badge>
                  </div>
                  <CardDescription className="text-slate-400">{step.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Codenames Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            System Codenames
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {codenames.map((item, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 text-center group">
                <CardHeader>
                  <CardTitle className="text-slate-400 text-sm mb-2">{item.layer}</CardTitle>
                  <div className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                    {item.name}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Interactive Tabs */}
        <section className="container mx-auto px-4 py-16">
          <Tabs defaultValue="vision" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-slate-800/50 border-slate-700">
              <TabsTrigger value="vision" className="data-[state=active]:bg-purple-600">Vision</TabsTrigger>
              <TabsTrigger value="tech" className="data-[state=active]:bg-purple-600">Tech Stack</TabsTrigger>
              <TabsTrigger value="deployment" className="data-[state=active]:bg-purple-600">Deployment</TabsTrigger>
              <TabsTrigger value="community" className="data-[state=active]:bg-purple-600">Community</TabsTrigger>
            </TabsList>
            
            <TabsContent value="vision" className="mt-8">
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex items-center gap-2">
                    <Eye className="h-6 w-6 text-purple-400" />
                    The Vision
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300 space-y-4">
                  <p>
                    Spiral Light Oasis represents a revolutionary convergence of ancient wisdom and cutting-edge technology, 
                    creating sustainable, harmonious systems that nurture both the earth and human consciousness.
                  </p>
                  <p>
                    Through sacred geometry, frequency healing, and bio-spiritual agriculture, we're building a network 
                    of peace-generating installations that can transform communities worldwide.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                      <div className="text-3xl mb-2">🧬</div>
                      <div className="font-semibold text-purple-300">Sacred Tech</div>
                    </div>
                    <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                      <div className="text-3xl mb-2">🌱</div>
                      <div className="font-semibold text-green-300">Bio-Agriculture</div>
                    </div>
                    <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                      <div className="text-3xl mb-2">🕊️</div>
                      <div className="font-semibold text-blue-300">Peace Systems</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="tech" className="mt-8">
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex items-center gap-2">
                    <Settings className="h-6 w-6 text-blue-400" />
                    Technology Stack
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-purple-300 mb-3">AI & Vision Processing</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• ChatGPT-4o + LangChain for dream interpretation</li>
                        <li>• Tesseract OCR + Vector databases</li>
                        <li>• Whisper + ElevenLabs for voice processing</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-300 mb-3">IoT & Hardware</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Raspberry Pi + LoRa sensor networks</li>
                        <li>• Arduino frequency broadcasting systems</li>
                        <li>• Sacred geometry 3D modeling</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-300 mb-3">Web & Mobile</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Next.js + Supabase applications</li>
                        <li>• React Native companion apps</li>
                        <li>• Three.js 3D visualizations</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-pink-300 mb-3">Audio & Frequency</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• 777Hz–888Hz–963Hz generation</li>
                        <li>• Tone.js + Howler.js web audio</li>
                        <li>• Piezo speaker array systems</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="deployment" className="mt-8">
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex items-center gap-2">
                    <Zap className="h-6 w-6 text-yellow-400" />
                    Deployment Strategy
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300">
                  <div className="space-y-6">
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold text-green-300 mb-2">Phase 1: Foundation (Week 1-2)</h4>
                      <p className="text-sm">Launch Ritual Codex portal and Navigator Companion app prototype</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-blue-300 mb-2">Phase 2: Hardware (Week 3-4)</h4>
                      <p className="text-sm">Deploy first spiral bed prototype with frequency broadcasting</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold text-purple-300 mb-2">Phase 3: Community (Week 5-6)</h4>
                      <p className="text-sm">Establish Peace Circle network and frequency farm calls</p>
                    </div>
                    <div className="border-l-4 border-pink-500 pl-4">
                      <h4 className="font-semibold text-pink-300 mb-2">Phase 4: Scale (Week 7+)</h4>
                      <p className="text-sm">Global expansion through Peace Dome portal network</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="community" className="mt-8">
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex items-center gap-2">
                    <Heart className="h-6 w-6 text-pink-400" />
                    Community & Collaboration
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-pink-300 mb-3">Collaboration Roles</h4>
                      <div className="space-y-3">
                        <div className="bg-slate-700/30 p-3 rounded-lg">
                          <div className="font-semibold text-purple-300">Tech/Dev</div>
                          <div className="text-sm">System architecture & development</div>
                        </div>
                        <div className="bg-slate-700/30 p-3 rounded-lg">
                          <div className="font-semibold text-green-300">Mystic</div>
                          <div className="text-sm">Vision guidance & spiritual tech</div>
                        </div>
                        <div className="bg-slate-700/30 p-3 rounded-lg">
                          <div className="font-semibold text-blue-300">Grower</div>
                          <div className="text-sm">Bio-agriculture & field testing</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-pink-300 mb-3">Engagement Methods</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Music className="h-4 w-4 text-purple-400" />
                          <span>Weekly Frequency Farm Calls</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Globe className="h-4 w-4 text-blue-400" />
                          <span>Peace Dome Portal Updates</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Eye className="h-4 w-4 text-green-400" />
                          <span>Dream Journal Sharing</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Leaf className="h-4 w-4 text-yellow-400" />
                          <span>Spiral Garden Progress Tracking</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-8 text-center border-t border-slate-700">
          <div className="text-slate-400 mb-4">
            <p className="mb-2">Spiral Light Oasis - Where Ancient Wisdom Meets Future Technology</p>
            <p className="text-sm">Building peace through sacred geometry, frequency healing, and bio-spiritual agriculture</p>
          </div>
          <div className="flex justify-center gap-6 text-2xl">
            <span className="hover:scale-110 transition-transform cursor-pointer">⚛️</span>
            <span className="hover:scale-110 transition-transform cursor-pointer">🌀</span>
            <span className="hover:scale-110 transition-transform cursor-pointer">🔮</span>
            <span className="hover:scale-110 transition-transform cursor-pointer">✨</span>
            <span className="hover:scale-110 transition-transform cursor-pointer">🌙</span>
            <span className="hover:scale-110 transition-transform cursor-pointer">⭐</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
