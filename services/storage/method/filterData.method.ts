import {type MatchSelected, type PlayerSelected, ScheduleSelected, type TeamSelected} from 'models/query/data.model'

export default {
  playersByName: (data: PlayerSelected[], name: string): PlayerSelected[] => {
    return data.filter((player: PlayerSelected): boolean => {
      return `${player.name} ${player.lastname}`.toLowerCase().includes(name.toLowerCase())
    })
  },
  teamsByName: (data: TeamSelected[], name: string): TeamSelected[] => {
    return data.filter((team: TeamSelected): boolean => {
      return team.name.toLowerCase().includes(name.toLowerCase())
    })
  },
  matchesByDate: (data: MatchSelected[], date: string): MatchSelected[] => {
    return data.filter((match: MatchSelected): boolean => {
      const scheduleDate: string = new Date(match.schedule.datetime).toISOString().split('T')[0]
      return date === scheduleDate
    })
  },
  schedulesByDate: (data: ScheduleSelected[], date: string): ScheduleSelected[] => {
    return data.filter((schedule: ScheduleSelected): boolean => {
      const scheduleDate: string = new Date(schedule.datetime).toISOString().split('T')[0]
      return date === scheduleDate
    })
  },
  schedulesAfterDate: (data: ScheduleSelected[], date: string): ScheduleSelected[] => {
    return data.filter((schedule: ScheduleSelected): boolean => {
      const scheduleDate: Date = new Date(schedule.datetime)
      return new Date(date) < scheduleDate
    })
  },
  schedulesBeforeDate: (data: ScheduleSelected[], date: string): ScheduleSelected[] => {
    return data.filter((schedule: ScheduleSelected): boolean => {
      const scheduleDate: Date = new Date(schedule.datetime)
      return new Date(date) > scheduleDate
    })
  },
}