"use client"
import { StaticImageData } from 'next/image'
import apiIcon from './apiIcon.svg'
import frontIcon from './frontIcon.svg'
import backIcon from './backIcon.svg'
import fullIcon from './fullIcon.svg'
import dbIcon from './dbIcon.svg'
import mobileIcon from './mobileIcon.svg'
import webIcon from './webIcon.svg'
import siteIcon from './siteIcon.svg'
import automationIcon from './autoIcon.svg'
import serverlessIcon from './serverIcon.svg'
import desktopIcon from './desktopIcon.svg'
import cliIcon from './cliIcon.svg'
import { useTranslations } from 'next-intl'

interface IThingsWeDo {
  icon: StaticImageData,
  title: string,
  description: string
}

const useThingsWeDo = () => {
  const t = useTranslations('thingsWeDo');

  const thingsWeDo: IThingsWeDo[] = [
    {
      icon: apiIcon,
      title: t('apis.title'),
      description: t('apis.description'),
    },
    {
      icon: frontIcon,
      title: t('frontEnd.title'),
      description: t('frontEnd.description'),
    },
    {
      icon: backIcon,
      title: t('backEnd.title'),
      description: t('backEnd.description'),
    },
    {
      icon: fullIcon,
      title: t('fullStack.title'),
      description: t('fullStack.description'),
    },
    {
      icon: dbIcon,
      title: t('databases.title'),
      description: t('databases.description'),
    },
    {
      icon: mobileIcon,
      title: t('mobileApps.title'),
      description: t('mobileApps.description'),
    },
    {
      icon: webIcon,
      title: t('webApps.title'),
      description: t('webApps.description'),
    },
    {
      icon: siteIcon,
      title: t('websites.title'),
      description: t('websites.description'),
    },
    {
      icon: automationIcon,
      title: t('automation.title'),
      description: t('automation.description'),
    },
    {
      icon: serverlessIcon,
      title: t('serverless.title'),
      description: t('serverless.description'),
    },
    {
      icon: desktopIcon,
      title: t('desktopApps.title'),
      description: t('desktopApps.description'),
    },
    {
      icon: cliIcon,
      title: t('cliTools.title'),
      description: t('cliTools.description'),
    },
  ];

  return thingsWeDo
}

export default useThingsWeDo