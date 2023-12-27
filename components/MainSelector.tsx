'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from './ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs'

import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from '@radix-ui/react-label'

export default function MainSelector() {
  return (
    <Tabs defaultValue='Shorten Url' className='w-[500px]  p-8 rounded'>
      <TabsList className='grid w-full grid-cols-3'>
        <TabsTrigger value='Shorten Url'>Shorten Url</TabsTrigger>
        <TabsTrigger value='Generate QR Code'>Generate QR Code</TabsTrigger>
        <TabsTrigger value='Link in Bio'>Link in Bio</TabsTrigger>
      </TabsList>
      <TabsContent value='Shorten Url'>
        <Card>
          <CardHeader>
            <CardTitle>Shorten URL</CardTitle>
            <CardDescription>
              Create a short link to share with your audience.
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-2'>
            <div className='space-y-1'>
              <Label htmlFor='long_url'>Looong URL</Label>
              <Input
                id='long_url'
                placeholder='https://your-long-url.com/some-annoying-path'
              />
            </div>
            <div className='space-y-1'>
              <Label htmlFor='username'>Path</Label>
              <div className='flex items-center'>
                <Input defaultValue='linkshrtnr.com/' disabled />
                <Input id='username' placeholder='my-url' />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value='Generate QR Code'>
        Make changes to your account here.
      </TabsContent>
      <TabsContent value='Link in Bio'>Change your password here.</TabsContent>
    </Tabs>
  )
}
