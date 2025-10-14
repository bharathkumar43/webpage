import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Zap,
  MessageSquare,
  Globe,
  Star,
  TrendingUp,
  Lightbulb,
  ArrowRight,
  ExternalLink,
  Heart,
  MessageCircle,
  Share2,
  Calendar,
  User,
  Award
} from 'lucide-react';

const Community = () => {
  const communityStats = [
    { label: "Active Members", value: "12,500+", icon: Users },
    { label: "Discussions", value: "8,900+", icon: MessageSquare },
    { label: "Success Stories", value: "1,200+", icon: Star },
    { label: "Countries", value: "45+", icon: Globe }
  ];

  const communityPlatforms = [
    {
      title: "Discord Community",
      description: "Join our Discord server for real-time discussions, tips, and support",
      icon: MessageSquare,
      members: "8,500+",
      activity: "Very Active",
      color: "bg-indigo-100 text-indigo-600",
      link: "#"
    },
    {
      title: "Community Forum",
      description: "Ask questions, share knowledge, and connect with other users",
      icon: Users,
      members: "12,000+",
      activity: "Active",
      color: "bg-blue-100 text-blue-600",
      link: "#"
    },
    {
      title: "GitHub Community",
      description: "Contribute to open source projects and share code examples",
      icon: Globe,
      members: "2,500+",
      activity: "Growing",
      color: "bg-gray-100 text-gray-600",
      link: "#"
    },
    {
      title: "LinkedIn Group",
      description: "Professional networking and industry insights",
      icon: Users,
      members: "5,000+",
      activity: "Active",
      color: "bg-blue-100 text-blue-600",
      link: "#"
    }
  ];

  const recentPosts = [
    {
      id: 1,
      title: "Amazing results with Kabini.ai - 300% traffic increase!",
      author: "Sarah Johnson",
      authorRole: "E-commerce Owner",
      time: "2 hours ago",
      likes: 24,
      comments: 8,
      category: "Success Story",
      featured: true
    },
    {
      id: 2,
      title: "Best practices for AI content optimization in 2025",
      author: "Mike Chen",
      authorRole: "SEO Specialist",
      time: "5 hours ago",
      likes: 18,
      comments: 12,
      category: "Tips & Tricks",
      featured: false
    },
    {
      id: 3,
      title: "How to integrate Kabini.ai with WordPress - Step by step guide",
      author: "Emily Rodriguez",
      authorRole: "Web Developer",
      time: "1 day ago",
      likes: 32,
      comments: 15,
      category: "Technical",
      featured: false
    },
    {
      id: 4,
      title: "Content strategy that actually converts - My experience",
      author: "David Kim",
      authorRole: "Marketing Manager",
      time: "2 days ago",
      likes: 28,
      comments: 9,
      category: "Strategy",
      featured: false
    }
  ];

  const featuredUsers = [
    {
      name: "Sarah Johnson",
      role: "E-commerce Owner",
      achievements: "Top Contributor",
      posts: 45,
      likes: 320,
      avatar: "/api/placeholder/60/60"
    },
    {
      name: "Mike Chen",
      role: "SEO Specialist",
      achievements: "Expert Helper",
      posts: 38,
      likes: 280,
      avatar: "/api/placeholder/60/60"
    },
    {
      name: "Emily Rodriguez",
      role: "Web Developer",
      achievements: "Technical Expert",
      posts: 52,
      likes: 410,
      avatar: "/api/placeholder/60/60"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative group">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-md">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 rounded-2xl bg-blue-500/30 blur-lg -z-10 transition-all duration-300 group-hover:blur-xl"></div>
              </div>
              <span className="text-2xl font-bold text-blue-600">
                Kabini.ai
              </span>
            </div>
            <Badge className="bg-blue-600 text-white px-3 py-1 rounded-full">
              Community
            </Badge>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Community</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Connect with other users, share experiences, and get help from the community
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {communityStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Community Platforms */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Join Our Communities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {communityPlatforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 ${platform.color} rounded-lg flex items-center justify-center`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{platform.title}</CardTitle>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>{platform.members} members</span>
                          <Badge variant="outline" className="text-xs">
                            {platform.activity}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{platform.description}</p>
                    <Button className="w-full">
                      Join Community <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Discussions */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Discussions</h2>
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{post.category}</Badge>
                        {post.featured && <Badge className="bg-blue-600">Featured</Badge>}
                      </div>
                      <span className="text-sm text-gray-500">{post.time}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{post.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <span>{post.authorRole}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {post.likes}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        {post.comments}
                      </div>
                      <Button variant="ghost" size="sm" className="ml-auto">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-6">
              <Button variant="outline" size="lg">
                View All Discussions
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Top Contributors */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Top Contributors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {featuredUsers.map((user, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-gray-600" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">{user.name}</div>
                        <div className="text-sm text-gray-500">{user.role}</div>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Award className="w-3 h-3" />
                          {user.achievements}
                        </div>
                      </div>
                      <div className="text-right text-xs text-gray-500">
                        <div>{user.posts} posts</div>
                        <div>{user.likes} likes</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Community Guidelines */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Community Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                    <span>Be respectful and constructive</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                    <span>Share knowledge and help others</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                    <span>Stay on topic and relevant</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                    <span>No spam or self-promotion</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Start Discussion
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Lightbulb className="w-4 h-4 mr-2" />
                    Share Tip
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Star className="w-4 h-4 mr-2" />
                    Success Story
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Join the Conversation</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Connect with thousands of users who are transforming their content marketing with AI
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Join Discord
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Users className="w-4 h-4 mr-2" />
                  Visit Forum
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Community;
