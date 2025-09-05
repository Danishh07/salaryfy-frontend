'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { articles, categories } from '@/data/articles'
import { Clock, User, Tag } from 'lucide-react'

export function ArticleGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [showAll, setShowAll] = useState(false)

  const filteredArticles = selectedCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory)

  const displayedArticles = showAll ? filteredArticles : filteredArticles.slice(0, 6)

  return (
    <section>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Financial Articles & Guides
        </h2>
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="text-sm"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {displayedArticles.map((article) => (
          <Card key={article.id} className="h-full hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                <Tag className="h-4 w-4" />
                <span>{article.category}</span>
              </div>
              <CardTitle className="text-xl mb-2 line-clamp-2">
                {article.title}
              </CardTitle>
              <CardDescription className="line-clamp-3">
                {article.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{article.readTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>{article.author}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {article.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <Button variant="outline" className="w-full" size="sm">
                Read Article
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Show More/Less Button */}
      {filteredArticles.length > 6 && (
        <div className="text-center">
          <Button
            onClick={() => setShowAll(!showAll)}
            variant="outline"
            size="lg"
          >
            {showAll ? 'Show Less' : `Show All ${filteredArticles.length} Articles`}
          </Button>
        </div>
      )}
    </section>
  )
}
