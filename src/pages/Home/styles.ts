import styled from 'styled-components'

export const Container = styled.div`
  width: 22.5rem;

  padding: 0 1.5rem;

  margin: 3.5rem auto 0;
`

export const Profile = styled.div`
  text-align: center;
  padding: 1.5rem;
`

export const Avatar = styled.img`
  width: 7rem;
`

export const Name = styled.p`
  font-weight: 500;
  line-height: 1.5rem;

  margin-top: 0.5rem;
`

export const List = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;

  gap: 1rem;

  padding: 1.5rem 0;
`

export const Link = styled.a`
  display: flex;

  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 0.5rem;
  font-weight: 500;
  text-decoration: none;

  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  padding: 1rem 1.5rem;
  align-items: center;
  justify-content: center;

  transition: background 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid #fff;
  }
`

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;

  padding: 1.5rem 0;

  font-size: 1.5rem;
`

export const SocialLink = styled.a``
