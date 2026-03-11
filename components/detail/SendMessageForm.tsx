'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function SendMessageForm() {
  const [stopReceiving, setStopReceiving] = useState(false)
  const [recipient, setRecipient] = useState('Applicant')
  const [sendBy, setSendBy] = useState('Email')
  const [schedule, setSchedule] = useState('')
  const [template, setTemplate] = useState('None')
  const [message, setMessage] = useState('')
  const [file, setFile] = useState<File | null>(null)

  return (
    <div className="space-y-4 p-3">

      <div className="flex items-center justify-between">
        <Label className="flex items-center gap-2 text-sm">
          <Checkbox
            checked={stopReceiving}
            onCheckedChange={() => setStopReceiving(!stopReceiving)}
          />
          <b>Stop Receiving Text</b>
        </Label>
      </div>

      <div className="space-y-1">
        <Label>Send to</Label>
        <Select value={recipient} onValueChange={setRecipient}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Applicant">Applicant</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-1">
        <Label>Send by</Label>
        <Select value={sendBy} onValueChange={setSendBy}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Email">Email</SelectItem>
            <SelectItem value="Text">Text</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-1">
        <Label>Schedule for?</Label>
        <Input
          placeholder="Select date/time"
          value={schedule}
          onChange={(e) => setSchedule(e.target.value)}
        />
      </div>

      {sendBy === 'Email' && (
        <div className="space-y-1">
          <Label>Email Subject</Label>
          <Input placeholder="Subject" />
        </div>
      )}

      <div className="space-y-1">
        <Label>Templates</Label>
        <Select value={template} onValueChange={setTemplate}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="None">None</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-1">
        <Label>Message</Label>
        <Textarea
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
        />
      </div>

      <div className="space-y-1">
        <Label>Attach file</Label>
        <Input
          type="file"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />
      </div>

      <Button
        disabled={!message}
        onClick={() => {
          setMessage('')
          setFile(null)
        }}
      >
        Send message
      </Button>

    </div>
  )
}