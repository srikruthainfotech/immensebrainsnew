import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function CareersLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section Skeleton */}
        <div className="text-center mb-16">
          <Skeleton className="h-12 w-48 mx-auto mb-6" />
          <Skeleton className="h-16 w-96 mx-auto mb-6" />
          <Skeleton className="h-6 w-full max-w-3xl mx-auto" />
        </div>

        {/* Search and Filters Skeleton */}
        <Card className="p-8 mb-12">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="md:col-span-2">
              <Skeleton className="h-12 w-full" />
            </div>
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
          </div>
        </Card>

        {/* Job Listings Skeleton */}
        <div className="space-y-8">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="p-8">
              <div className="flex items-start gap-6">
                <Skeleton className="w-16 h-16 rounded-3xl" />
                <div className="flex-1 space-y-4">
                  <Skeleton className="h-8 w-64" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <div className="grid md:grid-cols-4 gap-4">
                    <Skeleton className="h-6 w-32" />
                    <Skeleton className="h-6 w-32" />
                    <Skeleton className="h-6 w-32" />
                    <Skeleton className="h-6 w-32" />
                  </div>
                </div>
                <div className="flex gap-4">
                  <Skeleton className="h-12 w-32" />
                  <Skeleton className="h-12 w-32" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
